import React, { PureComponent } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import colors from "../components/Framework/colors"
import SEO from "../components/seo"

import Chevron from "../images/svgs/right-chevron.svg"
import Lightroom from "../images/svgs/lr.svg"
import Premiere from "../images/svgs/pp.svg"
import Photoshop from "../images/svgs/ps.svg"
import AE from "../images/svgs/ae.svg"
import XD from "../images/svgs/xd.svg"
import Illustrator from "../images/svgs/ai.svg"
import screens from "../components/Framework/Screens"

const AboutContainer = styled.div`
	min-height: 100vh;
	width: 100%;
	max-width: 1024px;
	margin: 0 auto;
	padding: 20.2vh 1.5em;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: stretch;
	position: relative;

	@media ${screens.tablet} {
		flex-direction: row;
		min-height: 90vh;
		justify-content: center;
	}

	@media ${screens.laptop} {
		min-height: 85vh;
		padding: 20.2vh 0;
		justify-content: center;
	}
	@media ${screens.tabletland} {
		padding: 20.2vh 1.5em;
	}
	@media ${screens.ipadProPortrait} {
		padding: 20.2vh 1.5em;
	}
`

const AboutTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	flex: 2;
`

const AboutHeader = styled.div`
	display: flex;
	flex-direction: column;
`

const AboutTitle = styled.h1`
	margin: 0;
	font-size: 1.2em;

	@media ${screens.laptop} {
		font-size: 1.4em;
	}
`

const AboutSubTitle = styled.h2`
	font-family: "Montserrat", sans-serif;
	font-size: 0.9em;
	margin: 0 0 0.8em 0;
	font-weight: 300;
	color: ${colors.secondaryBlack};

	@media ${screens.laptop} {
		font-size: 1em;
	}
`

const AboutDivider = styled.div`
	content: "";
	width: 60px;
	height: 2px;
	background: ${colors.accent};
	margin: 1.5em 0;

	@media ${screens.laptop} {
		margin: 0;
	}
`

const AboutParagraph = styled.p`
	color: ${colors.secondaryBlack};
	text-align: justify;
	font-size: 0.8em;

	@media ${screens.laptop} {
		font-size: 0.9em;
	}
`

const AboutSocialSkills = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`

const SocialSkill = styled.span`
  background: ${colors.accent};
  color: ${colors.white};
  font-size: 0.7em;
  margin: 0.5em 0.5em;
  padding: 0.33em 0.66em;
  border-radius: 50px;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-backface-visibility: hidden;

  &:hover,
  &:focus {
    /* color: ${colors.black}; */
    background: ${colors.secondaryBlack};
  }

  @media ${screens.laptop} {
    margin: 0 0.5em;
  }

  @media ${screens.ipadProPortrait} {
    margin: 0.5em 0.5em;
  }
`

const DownScroll = styled.div`
	position: absolute;
	bottom: 1em;
	z-index: 5;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: ${colors.secondaryBlack};
	text-transform: uppercase;
	font-size: 0.66em;
	letter-spacing: 2px;
	cursor: pointer;
	align-self: center;

	span {
		color: ${colors.secondaryBlack};
	}
	svg {
		height: 4em;
		width: 5em;
		transform: rotate(90deg);
	}
	@media ${screens.mobileSLandscape} {
		bottom: 0.66em;

		svg {
			height: 3em;
			width: 2em;
		}
	}

	@media ${screens.mobileMLandscape} {
		bottom: 0.66em;

		svg {
			height: 3em;
			width: 2em;
		}
	}

	@media ${screens.tabletland} {
		bottom: 0.66em;

		svg {
			height: 3em;
			width: 2em;
		}
	}
`

const AboutImg = styled(Img)`
	flex: 1;
	margin-bottom: 1.5em;

	@media ${screens.mobileSLandscape} {
		width: 40%;
		margin: 0 auto;
		margin-bottom: 1.5em;
	}
	@media ${screens.mobileMLandscape} {
		width: 40%;
		margin: 0 auto;
		margin-bottom: 1.5em;
	}

	@media ${screens.tablet} {
		flex: 2;
		margin-right: 1.5em;
		margin-bottom: 0em;
	}

	@media ${screens.laptop} {
		flex: 1;
		margin-right: 4em;
	}

	@media ${screens.tabletland} {
		margin-right: 1.5em;
	}

	@media ${screens.ipadProPortrait} {
		flex: 2;
		margin-right: 1.5em;
	}
`

const SkillsContainer = styled.div`
	min-height: 100vh;
	width: 100%;
	padding: 15.1vh 1.5em;
	display: flex;
	justify-content: center;
	align-items: stretch;
	position: relative;
	background: ${colors.black};
	color: ${colors.white};
	overflow: hidden;

	@media ${screens.laptop} {
		padding: 15.1vh 0;
	}

	@media ${screens.tabletland} {
		padding: 15.1vh 1.5em;
	}

	@media ${screens.ipadProPortrait} {
		padding: 15.1vh 1.5em;
	}
`

const SkillsInnerContainer = styled.div`
	width: 100%;
	max-width: 1024px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	z-index: 4;
	text-align: center;

	@media ${screens.tablet} {
		flex-direction: row;
		text-align: right;
	}
`

const Skills = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: center;
	width: 100%;
	margin-bottom: 1.5em;

	@media ${screens.tablet} {
		flex: 1;
		margin-right: 1em;
		margin-bottom: 0;
	}

	@media ${screens.laptop} {
		margin-right: 2em;
	}
`

const Skill = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	width: 100%;
	margin: 0 0 0.5em 0;

	span {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	@media ${screens.tablet} {
		align-items: center;
		flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
		margin: 0.2em 0;

		span {
			${props => (!props.reverse ? "margin-right: 1.5em" : "")};
			flex: 1;
		}
	}

	@media ${screens.mobileMLandscape} {
		width: 350px;
		margin: 0 auto 0.5em auto;
	}
`

const Bar = styled.div`
	max-width: 350px;
	width: 100%;
	flex: 3;
	position: relative;
	margin-top: 0.5em;

	@media ${screens.tablet} {
		max-width: 200px;
	}
	@media ${screens.laptop} {
		max-width: 350px;
		margin-top: 0;
	}
`

const GrayBar = styled.div`
	content: "";
	width: 100%;
	height: 2px;
	background: ${colors.secondaryBlack};
	display: block;
	position: relative;
`

const RedBar = styled.div`
	position: absolute;
	top: 0;
	content: "";
	width: ${props => (props.percentage ? props.percentage : 0)}%;
	height: 2px;
	background: ${colors.accent};
	display: block;

	@media ${screens.laptop} {
		${props => (props.reverse ? "right: 0" : "left: 0")};
	}
`

const OtherSkills = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	@media ${screens.tablet} {
		flex: 1;
		align-items: flex-end;
		margin-left: 1em;
	}

	@media ${screens.laptop} {
		margin-left: 2em;
	}
`

const SkillHeader = styled.h2`
	margin: 0;
	width: 100%;
	color: ${colors.white};
	font-size: 1.2em;

	@media ${screens.laptop} {
		width: 80%;
		font-size: 1.5em;
	}
`

const AdobeSkills = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 50px);
	grid-template-rows: repeat(2, 50px);
	grid-gap: 16px;
	margin: 1.5em 0;

	svg {
		width: 100%;
		transition: 0.2s cubic-bezier(0.19, 1, 0.22, 1);
	}

	svg:hover {
		filter: brightness(0.7);
	}

	@media ${screens.tablet} {
		margin: 0;
	}
`

const Cameras = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1.5em 0;

	@media ${screens.tablet} {
		margin: 0;
	}
`

const Camera = styled.span`
	color: ${props => (props.accent ? colors.accent : colors.secondaryWhite)};
`

const Languages = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	margin: 1.5em 0;

	@media ${screens.tablet} {
		margin: 0;
	}
`

const Disclaimer = styled.span`
	color: ${colors.secondaryBlack};
	font-size: 0.6em;
	margin: 1.5em 0;

	@media ${screens.laptop} {
		margin: 0;
		font-size: 0.7em;
	}
`

const MySkillsBackground = styled.h1`
	color: ${colors.white};
	position: absolute;
	font-size: 5em;
	top: 0.4em;
	left: -0.3em;
	z-index: 1;
	display: block;
	margin: 0;
	opacity: 0.03;

	@media ${screens.tablet} {
		font-size: 10em;
	}
	@media ${screens.laptop} {
		font-size: 15em;
	}
`

const ExperienceContainer = styled.div`
	width: 100%;
	max-width: 1024px;
	margin: 0 auto;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10.1vh 1.5em;

	@media ${screens.laptop} {
		padding: 10.1vh 0;
	}
`

const ExperienceHeader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const ExperienceTitle = styled.h1`
	margin: 0;
	font-size: 2.5em;

	@media ${screens.laptop} {
		font-size: 4em;
	}
`

const ExperienceSubtitle = styled.p`
	margin: 1em 0;
	color: ${colors.secondaryBlack};
`

const TimelineContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	margin: 40px 0;

	&:after {
		background-color: ${colors.accent};
		content: "";
		position: absolute;
		left: calc(90% - 2px);
		width: 4px;
		height: 100%;
	}

	@media ${screens.tablet} {
		&:after {
			left: calc(50% - 2px);
		}
	}
`

const TimelineItem = styled.div`
	display: flex;
	justify-content: flex-end;
	padding-right: 50px;
	position: relative;
	margin: 0.5em 0;
	width: 90%;

	&:nth-child(odd) {
		> div {
			background-color: ${colors.secondaryWhite};

			h3 {
				color: ${colors.black};
			}
			p {
				color: ${colors.secondaryBlack};
			}

			&:after {
				background-color: ${colors.secondaryWhite};
			}
		}
	}

	@media ${screens.tablet} {
		width: 50%;

		&:nth-child(odd) {
			align-self: flex-end;
			justify-content: flex-start;
			padding-left: 50px;
			padding-right: 0;

			> div {
				text-align: right;
				align-items: flex-end;

				span {
					right: auto;
					left: -4.75em;
				}

				&:after {
					right: auto;
					left: -7.5px;
					box-shadow: 10px 10px 25px -5px rgba(0, 0, 0, 0.1), 10px 10px 10px -5px rgba(0, 0, 0, 0.1);
				}
			}
		}
	}
`

const TimelineItemContent = styled.div`
	box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
	border-radius: 2px;
	background-color: ${colors.accent};
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 1em;
	position: relative;
	width: 100%;
	max-width: 800px;
	text-align: left;

	&:after {
		content: " ";
		background-color: ${colors.accent};
		box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
		position: absolute;
		right: -7.5px;
		top: calc(50% - 7.5px);
		transform: rotate(45deg);
		width: 15px;
		height: 15px;
	}
`

const TimelineTitle = styled.h3`
	color: ${colors.white};
	font-size: 1.2em;

	@media ${screens.laptop} {
		font-size: 1.3em;
	}
`

const TimelineText = styled.p`
	color: ${colors.secondaryWhite};
	margin: 0;
	font-size: 0.8em;

	@media ${screens.laptop} {
		font-size: 0.9em;
	}
`

const TimelineRectangle = styled.span`
	background: ${colors.accent};
	border-radius: 2px;
	position: absolute;
	top: calc(50% - 1em);
	right: -4.75em;
	z-index: 5;
	padding: 0.33em 0.8em;
	color: ${colors.white};
	font-family: "Open Sans";
	font-weight: 700;
`
class about extends PureComponent {
	constructor() {
		super()
		this.skillRef = React.createRef()
		this.expRef = React.createRef()
	}

	scroll(ref) {
		ref.current.scrollIntoView({ behavior: "smooth" })
	}
	render() {
		const { data, intl } = this.props

		return (
			<Layout>
				<SEO
					title={intl.formatMessage({ id: "SEO.aboutTitle" })}
					description={intl.formatMessage({ id: "SEO.aboutDesc" })}
				/>

				<AboutContainer>
					<AboutImg
						alt={intl.formatMessage({ id: "about.alt" })}
						fluid={data.me.childImageSharp.fluid}
					/>
					<AboutTextContainer>
						<AboutHeader>
							<AboutSubTitle>{intl.formatMessage({ id: "about.subtitle" })}</AboutSubTitle>
							<AboutTitle>{intl.formatMessage({ id: "about.title" })}</AboutTitle>
						</AboutHeader>
						<AboutDivider />
						<AboutParagraph>{intl.formatMessage({ id: "about.content" })}</AboutParagraph>
						<AboutSocialSkills>
							<SocialSkill>{intl.formatMessage({ id: "about.badge1" })}</SocialSkill>
							<SocialSkill>{intl.formatMessage({ id: "about.badge2" })}</SocialSkill>
							<SocialSkill>{intl.formatMessage({ id: "about.badge3" })}</SocialSkill>
							<SocialSkill>{intl.formatMessage({ id: "about.badge4" })}</SocialSkill>
							<SocialSkill>{intl.formatMessage({ id: "about.badge5" })}</SocialSkill>
						</AboutSocialSkills>
					</AboutTextContainer>
					<DownScroll
						onClick={() => {
							this.scroll(this.skillRef)
						}}
					>
						<span>{intl.formatMessage({ id: "about.mySkills" })}</span>
						<Chevron />
					</DownScroll>
				</AboutContainer>
				<SkillsContainer ref={this.skillRef}>
					<MySkillsBackground>{intl.formatMessage({ id: "about.mySkills" })}.</MySkillsBackground>
					<SkillsInnerContainer>
						<Skills>
							{data.skills.edges.map(skill => (
								<Skill key={skill.node.frontmatter.skillName}>
									<span>{skill.node.frontmatter.skillName}</span>
									<Bar>
										<GrayBar />
										<RedBar percentage={skill.node.frontmatter.percentage} />
									</Bar>
								</Skill>
							))}
						</Skills>
						<OtherSkills>
							<SkillHeader>{intl.formatMessage({ id: "about.knowledge" })}</SkillHeader>
							<AdobeSkills>
								<Premiere />
								<Photoshop />
								<Lightroom />
								<AE />
								<XD />
								<Illustrator />
							</AdobeSkills>
							<SkillHeader>{intl.formatMessage({ id: "about.current" })}</SkillHeader>
							<Cameras>
								<Camera accent>Sony A7III</Camera>
								<Camera>Panasonic GH5</Camera>
							</Cameras>
							<SkillHeader>{intl.formatMessage({ id: "about.speak" })}</SkillHeader>
							<Languages>
								<Skill reverse>
									<span>{intl.formatMessage({ id: "about.dutch" })}</span>
									<Bar>
										<GrayBar />
										<RedBar reverse percentage='100' />
									</Bar>
								</Skill>
								<Skill reverse>
									<span>{intl.formatMessage({ id: "about.french" })}</span>
									<Bar>
										<GrayBar />
										<RedBar reverse percentage='65' />
									</Bar>
								</Skill>
								<Skill reverse>
									<span>{intl.formatMessage({ id: "about.english" })}</span>
									<Bar>
										<GrayBar />
										<RedBar reverse percentage='80' />
									</Bar>
								</Skill>
								<Skill reverse>
									<span>{intl.formatMessage({ id: "about.german" })}</span>
									<Bar>
										<GrayBar />
										<RedBar reverse percentage='20' />
									</Bar>
								</Skill>
								<Disclaimer>{intl.formatMessage({ id: "about.footnote" })}</Disclaimer>
							</Languages>
						</OtherSkills>
					</SkillsInnerContainer>
					<DownScroll
						onClick={() => {
							this.scroll(this.expRef)
						}}
					>
						<span>{intl.formatMessage({ id: "about.exp" })}</span>
						<Chevron />
					</DownScroll>
				</SkillsContainer>
				<ExperienceContainer ref={this.expRef}>
					<ExperienceHeader>
						<ExperienceTitle>{intl.formatMessage({ id: "about.expTitle" })}</ExperienceTitle>
						<ExperienceSubtitle>{intl.formatMessage({ id: "about.timeline" })}</ExperienceSubtitle>
					</ExperienceHeader>
					<TimelineContainer>
						{data.timelineItems.edges.map(item => (
							<TimelineItem key={item.node.frontmatter.timelineTitle}>
								<TimelineItemContent>
									<TimelineTitle>{item.node.frontmatter.timelineTitle}</TimelineTitle>
									<TimelineText>{item.node.frontmatter.timelineDescription}</TimelineText>
									<TimelineRectangle>{item.node.frontmatter.year}</TimelineRectangle>
								</TimelineItemContent>
							</TimelineItem>
						))}
					</TimelineContainer>
				</ExperienceContainer>
			</Layout>
		)
	}
}

export default injectIntl(about)

export const query = graphql`
	query {
		me: file(relativePath: { eq: "me.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1080, quality: 100) {
					presentationWidth
					presentationHeight
					...GatsbyImageSharpFluid_withWebp_tracedSVG
				}
			}
		}
		skills: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/skills/" } }) {
			edges {
				node {
					frontmatter {
						percentage
						skillName
					}
				}
			}
		}
		timelineItems: allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/timelineItems/" } }
			sort: { fields: frontmatter___year }
		) {
			edges {
				node {
					frontmatter {
						timelineDescription
						timelineTitle
						year
					}
				}
			}
		}
	}
`
