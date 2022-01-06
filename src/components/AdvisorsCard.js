import React from "react";

import styled from "styled-components";
import { Item } from "components/SharedStyling";

function AdvisorsCard({
	name,
	title,
	subtitle = "",
	imgSrc,
	desc,
	height,
	width,
}) {
	return (
		<Item margin="20px">
			<Item align="flex-start">
				<Item
					justify="flex-start"
					height="auto"
					minWidth={width}
					maxWidth={width}
					direction="column"
					padding="20px"
					border="10px solid #F9FBFB"
					radius="5px"
					style={{
						background: "rgba(249, 251, 251, 0.5)",
						boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
					}}
				>
					<PersonImg src={imgSrc} />
					<Text
						color="#000"
						fontWeight="600"
						padding="5px"
						textTransform="capitalize"
					>
						{name}
					</Text>
					<Text
						color="#D01C85"
						fontWeight="600"
						padding="5px"
						textTransform="capitalize"
						lineHeight="25px"
						fontSize="20px"
					>
						{title}
					</Text>
					{subtitle !== "" && (
						<Text
							color="#000"
							padding="5px"
							textTransform="capitalize"
							lineHeight="19px"
							fontSize="15px"
						>
							{subtitle}
						</Text>
					)}
					<Text
						color="#000"
						padding="5px"
						textTransform="capitalize"
						lineHeight="18px"
						textAlign="justify"
						fontSize="14px"
						letterSpacing="0.05em"
					>
						{desc}
					</Text>
				</Item>
				<Item
					margin="0px 0px 0px 20px"
					style={{
						boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.25)",
						minHeight: "0px",
						maxHeight: "0px",
						borderLeft: "20px solid transparent",
						borderRight: "20px solid transparent",
						borderTop: "25px solid #DBD6D3",
					}}
				></Item>
			</Item>
		</Item>
	);
}

const PersonImg = styled.img`
	height: ${(props) => props.height || "170px"};
	width: auto;
	margin: 20px 0px 10px 0px;
	border-radius: 50%;
`;

const Text = styled.div`
	color: ${(props) => props.color || "inherit"};
	font-style: ${(props) => props.fontStyle || "normal"};
	font-family: ${(props) => props.fontFamily || "Source sans pro"};
	text-transform: ${(props) => props.textTransform || "none"};
	text-align: ${(props) => props.textAlign || "center"};
	font-weight: ${(props) => props.fontWeight || "normal"};
	font-size: ${(props) => props.fontSize || "24px"};
	line-height: ${(props) => props.lineHeight || "30px"};
	padding: ${(props) => props.padding || "0px"};
	letter-spacing: ${(props) => props.letterSpacing || "0.1em"};
	@media (max-width: 600px) {
		font-size: 1rem;
	}
`;

// Export Default
export default AdvisorsCard;
