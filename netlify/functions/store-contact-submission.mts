import { getDatabase } from "@netlify/database";
import type { FormSubmittedEvent } from "@netlify/functions";

const CONTACT_FORM_NAME = "gt-marketing-contact";

function requiredField(data: Record<string, string>, field: string) {
	const value = data[field]?.trim();

	if (!value) {
		throw new Error(`Missing required form field: ${field}`);
	}

	return value;
}

export default {
	async formSubmitted(event: FormSubmittedEvent) {
		const data = event.data;

		if (data["form-name"] !== CONTACT_FORM_NAME) {
			return;
		}

		const name = requiredField(data, "name");
		const company = requiredField(data, "company");
		const goal = requiredField(data, "goal");
		const budget = requiredField(data, "budget");
		const email = requiredField(data, "email").toLowerCase();
		const privacyConsent = data.privacy_consent === "yes";

		if (!privacyConsent) {
			throw new Error("Privacy consent was not provided.");
		}

		const database = getDatabase();
		const deadline = data.deadline?.trim() || null;
		const details = data.details?.trim() || null;
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
				${name},
				${company},
				${goal},
				${deadline},
				${budget},
				${email},
				${details},
				${privacyConsent},
				${rawData}::jsonb
			)
		`;

		console.log(`Stored GT Marketing enquiry from ${email}.`);
	},
};
