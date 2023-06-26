/* eslint-disable */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import styled from 'styled-components';
import { getNotifications, getSubscribers, loadKPIData } from '../api';

import { device } from '../config/globals';
import FadeInAnimation from './FadeInAnimation';
import { getSubscribersCount, getNotificationsCount }  from '../config/AnalyticsStats';

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
  const [kpiStats, setKpiStats] = useState({
    totalNotifsSent: '',
    totalSubscribersCount: ''
  });
  const [isLoading, setIsLoading] = useState(false);



  const loadData = async() => {
    try {
      setIsLoading(true);
      let result = await getSubscribersCount();
      let notifsResult = await getNotificationsCount();

    setKpiStats((current) => {
      return({
        ...current,
        totalNotifsSent: nFormatter(notifsResult),
        totalSubscribersCount: nFormatter(result)
      })
    });
    } catch (e) {
      console.error('Analytics API data fetch error: ', e);
    } finally {
      setIsLoading(false);
    }       
  };


  useEffect(() => {
    loadData();
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
  // const pushIntegrations = nFormatter(kpiStats?.pushIntegrations, 1) || '500+';

  // for now hard coded, plug back the API when real APIs are there.
  const totalNotifsSent = nFormatter(25037587, 1);
  const totalSubscribersCount = '70k+';
  const pushIntegrations = '450+';
  const pushChatSent = '>$1M';

  return (
    <KPIBanner>
          <ItemV gap="18px" className='kpiItem'>
              <KPIFigure>{kpiStats?.totalNotifsSent || '...'}</KPIFigure>
              <KPIMetric>Notifications<br />Sent</KPIMetric>
          </ItemV>

        <ItemV gap="18px" className='kpiItem'>
          <KPIFigure>{kpiStats?.totalSubscribersCount || '...'}{kpiStats?.totalSubscribersCount && '+'}</KPIFigure>
          <KPIMetric>Total<br />Subscribers</KPIMetric>
        </ItemV>

        <ItemV gap="18px" className='kpiItem'>
          <KPIFigure>{pushIntegrations}</KPIFigure>
          <KPIMetric>Total Push<br />Integrations</KPIMetric>
        </ItemV>

        <ItemV gap="18px" className='kpiItem'>
          <KPIFigure>{pushChatSent}</KPIFigure>
          <KPIMetric>In Grants <br />Given</KPIMetric>
        </ItemV>
    </KPIBanner>
  );
}

const KPIBanner = styled.div`
    background: linear-gradient(90deg, rgba(18, 19, 21, 0.5) -2.55%, rgba(42, 42, 57, 0.5) 32.62%, rgba(142, 49, 122, 0.5) 68.34%, rgba(18, 19, 21, 0.5) 102.97%);
    backdrop-filter: blur(30px);
    border-radius: 63px;
    display: flex;
    align-items: center;
    // justify-content: center;
    justify-content: space-between;
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

        width: 80%;

        padding: 24px;
        row-gap: 32px;
        column-gap: 8px;
        

        & .kpiItem {
            flex-direction: column;
            row-gap: 8px;

            // for 4 items
            flex: 0 0 48%;
            // align-items: flex-start;           

            // for 3 items
            // flex: 0 0 100%;
            // align-items: center;
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

export default AnalyticsStats