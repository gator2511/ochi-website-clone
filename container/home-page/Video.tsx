import { PlayVideo } from "@/components";

export default function Video({ content }: { content: { src: string; poster?: string } }) {
	return (
		<div data-sb-field-path="video.src">
			<PlayVideo
				videosrc={content.src}
				poster={content.poster ?? "/homevideo-poster.jpg"}
				width={1280}
				height={800}
			/>
		</div>
	);
}
