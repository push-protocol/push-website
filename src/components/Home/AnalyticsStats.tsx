/* eslint-disable */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// React + Web3 Essentials
import React, { useEffect, useState } from 'react';

// External Components
import { useTranslation } from 'react-i18next';
import { Oval } from 'react-loader-spinner';
import styled from 'styled-components';

// Internal Components
import { ItemHV2, SpanV2 } from '@site/src/components/SharedStylingV2';
import { getNotificationsCount, getSubscribersCount } from '@site/src/utils/AnalyticsStats';

// Internal Configs
import { device } from '@site/src/config/globals';

function nFormatter(num, digits) {
  const si = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
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
  // Internationalization
  const { t } = useTranslation();

  const [kpiStats, setKpiStats] = useState({
    totalNotifsSent: '',
    totalSubscribersCount: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const loadData = async () => {
    try {
      setIsLoading(true);
      let result = await getSubscribersCount();
      let notifsResult = await getNotificationsCount();

      setKpiStats((current) => {
        return {
          ...current,
          totalNotifsSent: nFormatter(notifsResult),
          totalSubscribersCount: nFormatter(result),
        };
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

  if (!kpiStats && isLoading)
    return (
      <Oval
        height={80}
        width={80}
        color="#FFFFFF"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
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
    <AnalyticsStatCardList>
      <AnalyticsStatCard>
        <KPIFigure>{kpiStats?.totalNotifsSent || '...'}</KPIFigure>
        <KPIMetric>
          {t('home.stats.notifications.part1')}
          <br />
          {t('home.stats.notifications.part2')}
        </KPIMetric>
      </AnalyticsStatCard>

      <AnalyticsStatCard>
        <KPIFigure>
          {kpiStats?.totalSubscribersCount || '...'}
          {kpiStats?.totalSubscribersCount && '+'}
        </KPIFigure>
        <KPIMetric>
          {t('home.stats.subscribers.part1')}
          <br />
          {t('home.stats.subscribers.part2')}
        </KPIMetric>
      </AnalyticsStatCard>

      <AnalyticsStatCard>
        <KPIFigure>{pushIntegrations}</KPIFigure>
        <KPIMetric>
          {t('home.stats.integrations.part1')}
          <br />
          {t('home.stats.integrations.part2')}
        </KPIMetric>
      </AnalyticsStatCard>

      <AnalyticsStatCard>
        <KPIFigure>{pushChatSent}</KPIFigure>
        <KPIMetric>
          {t('home.stats.grants.part1')}
          <br />
          {t('home.stats.grants.part2')}
        </KPIMetric>
      </AnalyticsStatCard>
    </AnalyticsStatCardList>
  );
}

const AnalyticsStatCardList = styled.div`
  flex: 1;

  background: linear-gradient(
    90deg,
    rgba(18, 19, 21, 0.5) -2.55%,
    rgba(42, 42, 57, 0.5) 32.62%,
    rgba(142, 49, 122, 0.5) 68.34%,
    rgba(18, 19, 21, 0.5) 102.97%
  );
  backdrop-filter: blur(30px);
  border-radius: 62px;
  display: flex;
  align-items: center;
  gap: 18px;
  
  justify-content: space-between;
  width: 100%;
  padding: 30px 50px;
  font-family: 'Strawford';
  font-style: normal;

  @media ${device.laptop} {
    background: rgba(42, 42, 57, 0.5);

    flex-direction: row;
    flex-wrap: wrap;

    padding: 24px;
    row-gap: 32px;
    column-gap: 8px;

    border-radius: 32px;
  }
`;

const AnalyticsStatCard = styled(ItemHV2)`
  gap: 18px;
  align-items: center;
  justify-content: center;
  
  @media ${device.laptop} {
    row-gap: 16px;
  }
  
  @media ${device.tablet} {
    flex-direction: column;
    row-gap: 8px;

    // for 4 items
    flex: 0 0 48%;
  }
`

const KPIFigure = styled(SpanV2)`
  font-weight: 700;
  font-size: 48px;
  line-height: 110%;
  letter-spacing: -0.02em;
  color: #ffffff;

  @media ${device.tablet} {
    font-size: 32px;
  }
`;

const KPIMetric = styled(SpanV2)`
  font-weight: 400;
  font-size: 18px;
  line-height: 121%;
  letter-spacing: -0.03em;
  color: #ffffff;

  @media ${device.tablet} {
    align-self: center;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
  }
`;

export default AnalyticsStats;
