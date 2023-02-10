// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable react/prop-types */
/* eslint-disable */


import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import PageWrapper from '../components/PageWrapper';
import pageMeta from 'config/pageMeta'
import { device } from 'config/globals';
import { Anchor,B,Content, H2 , H3 , HeroHeader, Input ,ItemH, ItemV, Span } from 'components/SharedStyling';
import HybridSection from 'components/HybridSection';
import SignupInput from 'components/SignupInput';
import { BodyContent } from './Home';
import useMediaQuery from 'hooks/useMediaQuery';
import { BiSearch } from 'react-icons/bi';
import ChannelItem, { Tilt } from 'components/ChannelItem';
import { FiChevronDown } from 'react-icons/fi';
import SpinnerSVG from 'assets/Spinner.gif';
import Image from 'assets/bg-image.png'
import { objChannelList } from 'config/ChannelList';




const FrensText = () => {

const isMobile = useMediaQuery(device.mobileL)
const [channels, setChannels] = useState([]); 
const [page, setPage] = useState(0); 
const [active, setActive] = useState('All'); 
const [count, setCount] = useState(objChannelList?.length); 
const [loading, setLoading] = React.useState(true);
const [search, setSearch] = React.useState('')
const options = {
    scale: 1,
    speed: 1000,
    max: 30
  };


const typeList = [
                   {
                      name: 'All',
                   },
                    {
                        name: 'DeFi',
                    },
                    {
                        name: 'DAO',
                    },
                    {
                        name: 'NFT',
                    },
                    {
                        name: 'Metaverse',
                    },
                    {
                        name: 'Tooling',
                    },
                    {
                        name: 'Infrastructure',
                    },
                    {
                        name: 'Social',
                    },
                    {
                        name: 'Service',
                    },
                    {
                        name: 'Gaming',
                    },
                    {
                        name: 'Media',
                    }
    ]

    useEffect(() => {
      fetchChannels();
    },[objChannelList])

    const fetchChannels = () => {
      let freshPage = 0; 
      setPage(freshPage)
      if (objChannelList.length) {
        let list = objChannelList?.slice(freshPage, freshPage + 9)
        setTimeout(() => {
            setLoading(false)
            setChannels(list)
        }, 1000);
    }
  }

useEffect(() => {
    if(search.length > 0 || active !== "All") return;
    fetchChannels()
}, [search])

    const ShowMore = async () => {
    //page
    let newPage = page + 9;
    setPage(newPage)

        try {
            setLoading(true)
            let data = objChannelList?.slice(newPage, newPage + 9);
            setTimeout(() => {
              setChannels(current => [...current, ...data]);
            }, 500)
        } catch (error) {
            console.error("Channels API data fetch error: ", error);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
    }

    const channelSearch = async (e) => {
      let query = e.target.value;
      setSearch(e.target.value);
      if (e.target.value?.length == 0) return

      try {
          setLoading(true)
          const data = objChannelList.filter(x => x.name.toLowerCase().includes(query));
          setChannels(data)
      } catch (error) {
          console.error("Channels API data fetch error: ", error)
      } finally {
          setLoading(false)
      }
    }

    const handleSort = (name) => {
      setActive(name);
      setSearch('');
      if (name == "All"){
        fetchChannels();
        setCount(objChannelList.length)
      } else {
        setLoading(true);
        let sortList = objChannelList.filter(x => x.type === name);
        setTimeout(() => {
          setChannels(sortList);
          setLoading(false);
          setCount(sortList.length)
      }, 500);
      }
    }


  return (
    <PageWrapper
      pageName={pageMeta.FRENS.pageName}
      pageTitle={pageMeta.FRENS.pageTitle}
    >
        <FrensWrapper>
            <AnimationSection minHeight="60vh" padding="80px 0px 20px 0px">
            <Content className="contentBox" flex="0">
                <ItemH flexDirection="column" justifyContent="center">
                <HeroHeader>Frens of Push</HeroHeader>
                <Span textAlign="center" margin="20px 0 0 0" spacing="-0.03em" weight={isMobile ? "300" : "400"} size={isMobile ? "18px": "23px"}>Explore hundreds of applications building with Push {!isMobile && <br />} worldwide across DeFi, NFTs, Gaming, Dev tools, and more.</Span>
                </ItemH>
            </Content>
            </AnimationSection>

            {/* <ChannelList /> */}

            <PoweredSection 
                id="story"
                data-bkg="light"
                className="lightBackground"
                curve="bottom">
                
                <Content className='contentBox'>
                
                <PushRow>
                    <ItemV justifyContent="flex-start">
                        <ResponsiveH2
                        size="40px"
                        weight="500"
                        spacing="-0.02em"
                        lineHeight="110%"
                        >
                        Powered by Push
                        </ResponsiveH2>
                    </ItemV>
                    <ItemV 
                        maxWidth="350px"
                        justifyContent="flex-end">

                    <Wrapper>
                      <BiSearch size="23" color='#121315' />
                      <input 
                        type="text"
                        value={search}
                        placeholder='Search dapps'
                        onChange={channelSearch}
                        />

                    </Wrapper>

                    </ItemV>
                    </PushRow>

                    <ToggleSection>
                        {typeList.map((item,i) => 
                        (<ToggleButton 
                            key={item?.name}
                            active={active === item?.name ? true : false}
                            onClick={() => handleSort(item?.name)}
                            >
                            <Span>{item?.name}</Span>

                            {active === item?.name && (<b>{count}</b>)}
                        </ToggleButton>))}
                    </ToggleSection>


                    <ChannelsSection>
                        {channels?.map((item,i) => (
                            <Channels key={item.ipfshash}>
                                {isMobile ? 
                                (<ChannelItem channelProp={item} />) :
                                (<Tilt options={options} className='box'>
                                     <ChannelItem channelProp={item} />
                                </Tilt>)}
                            </Channels>
                        ))}
                    </ChannelsSection>

                    {search && !loading && channels.length === 0 &&(<CenteredContainerInfo>
                        <DisplayNotice>
                             No channels match your query, please search for another name/address
                        </DisplayNotice>
                    </CenteredContainerInfo>)}

                    {active !== 'All' && !loading && count === 0 &&(<CenteredContainerInfo>
                        <DisplayNotice>
                             No channels under this type yet.
                        </DisplayNotice>
                    </CenteredContainerInfo>)}

                    {loading && (<ItemH>
                        <img src={SpinnerSVG} alt='' width={140} />
                    </ItemH>)}

                    {!loading && active === "All" && search.length === 0 && (<ShowMoreSection onClick={ShowMore}>
                        <FiChevronDown size={23} />
                        <b>Show More</b>
                    </ShowMoreSection>)}
                </Content>



                <BodyContent className="contentBox">
                    <SignupBox margin="0 0 0px 0">
                        <ItemV
                            justifyContent="flex-start"
                            gap="12px"
                        >
                            <ResponsiveH2
                            color="#09090B"
                            size="40px"
                            weight="700"
                            spacing="-0.02em"
                            lineHeight="110%"
                            margin="0"
                            >
                            Never Miss an Update
                            </ResponsiveH2>
                            <Span
                            color="#303C5E"
                            size="20px"
                            weight="400"
                            spacing="-0.03em"
                            lineHeight="138.5%"
                            >
                            Sign up and stay up to date with ecosystem announcements, giveaways and more.
                            </Span>
                         </ItemV>    

                        <ItemV>
                            <SignupInput />
                        </ItemV>
                     </SignupBox>

                    </BodyContent>
            </PoweredSection>
        </FrensWrapper>
    </PageWrapper>
  )
};

const FrensWrapper = styled.main`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  & #hero .contentBox {
    row-gap: 18px;
  }
  @media ${device.tablet} {
    width: 100%;
  }
`;

const CenteredContainerInfo = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DisplayNotice = styled.span`
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  margin: 10px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 400;
  color: #000;
  background: rgb(244, 245, 250);
`

const ToggleSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`
const ChannelsSection = styled.div`
  margin: 50px 0px 0px 0px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 32px;
  @media ${device.laptop} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
 }
  @media ${device.mobileL} {
     grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`

const ToggleButton = styled.div`
    border: ${(props) => props.active ? 'none' : '1px solid #BAC4D6'};
    border-radius: 62px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    box-sizing: border-box;
    width: fit-content;
    height: fit-content;
    left: 0;
    margin: 5px 5px;
    background: ${(props) => props.active ? '#D53893' : 'transparent'};
    color: ${(props) => props.active ? '#fff' : '#000'};
    &:hover {
        background: ${(props) => props.active ? '#D53893' : '#FFDBF0'};
        border: none;
        cursor: pointer;
    }

    span {
     font-size: 20px;
     font-weight: 500;
     border: none;
     color: ${(props) => props.active ? '#fff' : '#000'};
    }

    // &:has(b) {
    //     background: #D53893;
    //     color: #fff;
    //     border: none;
    //     &:hover {
    //         background: #D53893;
    //         border: none;
    //         cursor: pointer;
    //     }
    // }

    b {
        font-weight: 500;
        font-size: 20px;
        line-height: 110%;
        letter-spacing: -0.03em;  
        margin-left: 30px;
    }
`


const ResponsiveH2 = styled(H2)`
  @media ${device.tablet} {
    font-size: 32px;
  }
`;

const SignupBox = styled(ItemH)`
  background: rgba(214, 177, 242, 0.8);
  backdrop-filter: blur(15px);
  border-radius: 32px;
  padding: 72px;
  display: flex;
  flex-direction: row;
  gap: 24px;

  @media ${device.tablet} {
    padding: 24px;
    flex-direction: column;
  }
`;

const ResponsiveSection = styled(HybridSection)`
  min-height: ${(props) => props.minHeight || '0px'};
  @media ${device.tablet} {
    padding-left: 30px !important;
    padding-right: 30px !important;
  }
`;

const AnimationSection = styled(ResponsiveSection)`
  background-image: url(${Image});
  background-repeat:no-repeat;
  background-size: cover;
//   min-height: 60vh !important;
  background-position: center center;
//   background-repeat: no-repeat; background-size: cover;
  padding-bottom: 50px;
  @media ${device.tablet} {
    background: #121315;
    border-bottom-left-radius: 48px;
    border-bottom-right-radius: 48px;
    padding-bottom: 0px;
  }
`;

const PushRow = styled(ItemH)`
  margin: 80px 0 50px 0;

  @media ${device.tablet} {
    margin-top: 80px;
  }
`;

const PoweredSection = styled(ResponsiveSection)`
 padding: 0px 160px 80px 160px;
  @media ${device.tablet} {
    padding-bottom: 32px;
  }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    column-gap: 6px;
    align-items: center;
    background: #FFFFFF;
    border-radius: 20px;
    border: 1px solid #d9d9d9;
    padding: 16px;
    justify-content: space-between;

    @media ${device.tablet} {
        column-gap: 3px;
    }

    & input[type="text"] {
        all: unset;
        box-sizing: border-box;
        font-family: 'Strawford';
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: normal;
        letter-spacing: -0.03em; 
        color: #121315;
        width: 100%;
        padding: 0px;

        &::placeholder {
            color: #121315;
            opacity: 1;
            font-size: 20px;
        }

        @media ${device.tablet} {
            min-width: fit-content;
        }
    }
`;

const Channels = styled.div`
    .box {
        flex: 1;
        height: 100% !important;
    }
`

const ShowMoreSection = styled.div`
    border: 1px solid #BAC4D6;
    border-radius: 24px;
    margin: 70px 0px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 23px;
    cursor: pointer;
    b {
        font-weight: 500;
        font-size: 20px;
        line-height: 110%;
        letter-spacing: -0.03em;
        color: #1E1E1E;
    }
`

export default FrensText