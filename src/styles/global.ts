import { createGlobalStyle } from "styled-components";

import "bootstrap/dist/css/bootstrap.min.css";

import { fontFaces } from "./font-faces";
import { reset } from "./reset";

export const GlobalStyles = createGlobalStyle`
	${fontFaces};

	${reset}
	* {
		box-sizing: border-box;
	}

	body {
		line-height: 1.6;
		background-color: ${(props) => props.theme.colors.white};
		font-family: ${(props) => props.theme.typography.fontSourceSansProRegular};
		color: ${(props) => props.theme.colors.grey7};
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	h1, h2, h3, h4 {
		margin-bottom: 1.6rem;
		font-weight: bold;
	}

	h1 { 
		font-size: 3.375em;
		line-height: 4.75rem;
	}
	h2 { 
		font-size: 2.25em; 
		line-height: 4rem;
		margin-bottom: 1rem;
	}
	h3 { 
		font-size: 1.5em;
		line-height: 1rem;
	 }
	h4 { 
		font-size: 1.125em;
		line-height: .8rem;
	}

	p, ul {
		margin-bottom: 1.2rem;
	}

	b {
		font-weight: bold;
	}

	a {
		color: ${(props) => props.theme.colors.red};
			&:hover {
				color: ${(props) => props.theme.colors.red};
			}
	}
`;
