import React from "react";

import styled from "styled-components";
import { Item, Image, Span, Anchor, Button } from "components/SharedStyling";

import Tilt from "react-tilt";

// Create Header
function NewsCard({ title, thumbnail, logo, desc, link }) {
	// RENDER
	return (
		<Item justify="stretch" align="stretch" minWidth="280px" margin="40px">
			<TiltModded className="Tilt" options={{ max: 40 }}>
				<NewsCardLink
					href={`${link}`}
					direction="column"
					target="_blank"
					title={`Article talking About ${title}`}
					bg="#000"
					hover="#000"
					radius="12px"
					align="stretch"
				>
					<Image src={thumbnail} />
					<Item
						direction="column"
						style={{
							flexFlow: "nowrap",
							justifyContent: "flex-start",
						}}
					>
						<Image
							src={logo}
							style={{
								width: "80px",
							}}
						/>
						<Span
							color="#fff"
							padding="20px 10px 12px 10px"
							size="1em"
							spacing="0.2em"
						>
							{title}
						</Span>
					</Item>
					<Span
						padding="5px 20px 12px 20px"
						size=".8em"
						spacing="0.2em"
						color="#fff"
						style={{ flexFlow: "wrap" }}
					>
						{desc}
					</Span>
					<Button
						href={link}
						border="2px solid #fff"
						radius="10px"
						style={{ background: "transparent" }}
					>
						KNOW MORE!
					</Button>
				</NewsCardLink>
			</TiltModded>
		</Item>
	);
}

// css style
// box-shadow: rgb(35 29 46 / 0.2) 0px 10px 40px;
const TiltModded = styled(Tilt)``;

const NewsCardLink = styled(Anchor)`
	padding: 8px;

	${Image} {
		border-radius: 8px;
		overflow: hidden;
	}

	${Span} {
	}

	&:hover ${Span} {
		color: #fff;
	}
`;

// Export Default
export default NewsCard;
