/*
 * @Author: busyzz
 * @Date: 2021-09-02 16:26:03
 * @Description:
 */
import React, { useRef } from 'react';
import { Button, message } from 'antd';
import { toPng } from 'html-to-image';
import download from 'downloadjs';
import Section from 'components/ui/section';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import avatarImage from 'assets/images/avatar.jpg';
import styles from './index.module.scss';
const DownloadPage = () => {
  const pageRef = useRef<HTMLDivElement>();
  const onExport = () => {
    const node = pageRef.current;
    toPng(node).then((dataUrl) => {
      download(dataUrl, 'page.png');
    });
  };
  return (
    <>
      <Section>复制文本</Section>
      <div>这是一段文本</div>
      <CopyToClipboard
        text='这是一段文本'
        onCopy={(str) => message.success('复制成功')}
      >
        <Button style={{ marginTop: 20 }} type='primary'>
          复制文本
        </Button>
      </CopyToClipboard>
      <Section>将 HTML 元素导出为图片</Section>
      <div ref={pageRef} className={styles.page}>
        <div className={styles.header}>header</div>
        <div className={styles.content}>
          <img src={avatarImage} alt='' />
        </div>
        <div className={styles.footer}>footer</div>
      </div>
      <Button style={{ marginTop: 20 }} type='primary' onClick={onExport}>
        导出为图片
      </Button>
    </>
  );
};

export default DownloadPage;
