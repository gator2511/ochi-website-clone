import { getDatabase } from "@netlify/database";

type FormData = Record<string, string | undefined>;

export default {
	async formSubmitted(event: { data?: FormData }) {
		const data = event.data ?? {};
		const formName = data["form-name"] ?? data.formName ?? data.form_name;

		if (formName && formName !== "gt-marketing-contact") {
			return;
		}

		if (!data.name || !data.company || !data.goal || !data.email || !data.budget) {
			console.warn("Skipping incomplete GT Marketing contact submission.");
			return;
		}

		const database = getDatabase();
		const deadline = data.deadline?.trim() || null;
		const details = data.details?.trim() || null;
		const consent = data.privacy_consent === "yes";
		const rawData = JSON.stringify(data);

		await database.sql`
			INSERT INTO contact_submissions (
				name,
				company,
				goal,
				deadline,
				budget,
				email,
				details,
				privacy_consent,
				raw_data
			)
			VALUES (
				${data.name.trim()},
				${data.company.trim()},
				${data.goal.trim()},
				${deadline},
				${data.budget.trim()},
				${data.email.trim().toLowerCase()},
				${details},
				${consent},
				${rawData}::jsonb
			)
		`;
	},
};
