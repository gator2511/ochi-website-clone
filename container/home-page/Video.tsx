import { PlayVideo } from "@/components";

export default function Video({ content }: { content: { src: string } }) {
	return (
		<div data-sb-field-path="video.src">
			<PlayVideo videosrc={content.src} />
		</div>
	);
}
