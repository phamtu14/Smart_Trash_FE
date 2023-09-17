import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Col, Form, Radio, Row } from 'antd';
import locale from 'antd/es/date-picker/locale/vi_VN';
import { ButtonSave } from '../CustomModal/styled';
import { ColBold, ColCenter, TextUrl } from '../../../containers/Profile/components/InformationProfile/style';
import DatePicker from '../DatePicker';
import { ColIcon, ItemContainer, RadioGroup, RadioLayout, RadioLayoutItem } from '../CopyPageSignModal/styled';

const PageSignContainer = ({ onValue, onChangeValue /* , dataCopy */ }) => {
  const { t } = useTranslation();
  return (
    <ItemContainer>
      <Row>
        <Col span={2}>{t('common.signatory')}:</Col>
        <ColBold span={18}>aaa</ColBold>
      </Row>
      <Row>
        <ColCenter span={2}>{t('common.address')}:</ColCenter>
        <ColCenter span={18}>
          <TextUrl>{t('profile.testUrl')}</TextUrl>
        </ColCenter>
        <ColIcon span={4}>
          <ButtonSave>{t('common.copy')}</ButtonSave>
        </ColIcon>
      </Row>
      <RadioLayout>
        <RadioLayoutItem>
          <Form.Item style={{ marginBottom: '0px' }} label={t('common.duration')}>
            <Row>
              <Col span={3} />
              <Col span={21}>
                <RadioGroup defaultValue={onValue} onChange={onChangeValue}>
                  <Row>
                    <Col span={12}>
                      <Radio value={1}>{t('profile.timeLimit')}</Radio>
                    </Col>
                    <Col span={12}>
                      <Radio value={2}>{t('profile.timeNoLimit')}</Radio>
                    </Col>
                  </Row>
                </RadioGroup>
              </Col>
            </Row>
          </Form.Item>
          {onValue === 2 ? (
            <Row>
              <Col span={7} />
              <Col span={12}>
                <Form.Item
                  name="deadlineSignProfile"
                  rules={[
                    {
                      required: true,
                      message: t('profile.requireDateTime'),
                    },
                  ]}
                >
                  <DatePicker placeholder="Hh:mm DD/MM/YYYY" locale={locale} format="DD/MM/YYYY HH:mm" showTime />
                </Form.Item>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col span={7} />
              <Col span={12}>
                <Form.Item
                  name="deadlineSignProfile"
                  rules={[
                    {
                      required: true,
                      message: t('profile.requireDateTime'),
                    },
                  ]}
                >
                  <DatePicker locale={locale} format="DD/MM/YYYY HH:mm" showTime />
                </Form.Item>
              </Col>
            </Row>
          )}
        </RadioLayoutItem>
      </RadioLayout>
    </ItemContainer>
  );
};
PageSignContainer.propTypes = {
  onValue: PropTypes.number,
  onChangeValue: PropTypes.func,
  // dataCopy: PropTypes.array,
};

export default PageSignContainer;
