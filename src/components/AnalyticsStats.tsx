// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Oval } from  'react-loader-spinner';
import { loadKPIData } from '../api';

import { device } from '../config/globals';

import {
  ItemV, Span
} from './SharedStyling';

function nFormatter(num, digits) {
  const si = [
    { value: 1, symbol: '' },
    { value: 1E3, symbol: 'k' },
    { value: 1E6, symbol: 'M' },
    { value: 1E9, symbol: 'G' },
    { value: 1E12, symbol: 'T' },
    { value: 1E15, symbol: 'P' },
    { value: 1E18, symbol: 'E' }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
}

function AnalyticsStats() {
  const [kpiStats, setKpiStats] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadData = async() => {
    try {
      setIsLoading(true);
      const data = await loadKPIData();
      console.log('analytics data: ', data);
      setKpiStats(data);
    } catch (e) {
      console.error('Analytics API data fetch error: ', e);
    } finally {
      setIsLoading(false);
    }       
  };


  useEffect(() => {
    // loadData();
  }, []);

  if (!kpiStats && isLoading) return (
    <Oval
      height={80}
      width={80}
      color="#FFFFFF"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor="#8e317a80"
      strokeWidth={2}
      strokeWidthSecondary={2}

    />
  );

  // const totalNotifsSent = nFormatter(kpiStats?.totalNotifsSent, 1) || '4.6M';
  // const totalSubscribersCount = nFormatter(kpiStats?.totalSubscribersCount, 1) || '1.2K';
  // const totalChannelCount = nFormatter(kpiStats?.totalChannelCount, 1) || '500+';

  // for now hard coded, plug back the API when real APIs are there.
  const totalNotifsSent = nFormatter(17737587, 1);
  const totalSubscribersCount = '60k+';
  const totalChannelCount = '100+';

  return (
    <KPIBanner>
      <ItemV gap="18px" className='kpiItem'>
        <KPIFigure>{totalNotifsSent}</KPIFigure>
        <KPIMetric>Notifications<br />Sent</KPIMetric>
      </ItemV>

      <ItemV gap="18px" className='kpiItem'>
        <KPIFigure>{totalSubscribersCount}</KPIFigure>
        <KPIMetric>Total<br />Subscribers</KPIMetric>
      </ItemV>

      <ItemV gap="18px" className='kpiItem'>
        <KPIFigure>{totalChannelCount}</KPIFigure>
        <KPIMetric>Channels<br />Created</KPIMetric>
      </ItemV>

     
      {/* <ItemV gap="18px" className='kpiItem'>
            <KPIFigure>86%</KPIFigure>
            <KPIMetric>Total no. of<br />Chats</KPIMetric>
        </ItemV> */}
    </KPIBanner>
  );
}

const KPIBanner = styled.div`
    background: linear-gradient(90deg, rgba(18, 19, 21, 0.5) -2.55%, rgba(42, 42, 57, 0.5) 32.62%, rgba(142, 49, 122, 0.5) 68.34%, rgba(18, 19, 21, 0.5) 102.97%);
    backdrop-filter: blur(30px);
    border-radius: 63px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 30px 50px;
    font-family: 'Strawford';
    font-style: normal;

    & .kpiItem {
        flex-direction: row;
    }

    @media ${device.tablet} {
        flex-direction: row;
        flex-wrap: wrap;

        padding: 24px;
        row-gap: 40px;
        column-gap: 8px;

        & .kpiItem {
            // flex: 0 0 48%;
            // align-items: flex-start;
            flex-direction: column;

            flex: 0 0 100%;
            align-items: center;
            row-gap: 8px;
        }
     }
`;

const KPIFigure = styled(Span)`
    font-weight: 700;
    font-size: 48px;
    line-height: 110%;
    letter-spacing: -0.02em;
    color: #FFFFFF;

    @media ${device.tablet} {
        font-size: 32px;
    }
`;

const KPIMetric = styled(Span)`
    font-weight: 200;
    font-size: 18px;
    line-height: 121%;
    letter-spacing: -0.03em;
    color: #FFFFFF;

    @media ${device.tablet} {
        font-size: 16px;
        font-weight: 400;
    }
`;

export default AnalyticsStats;