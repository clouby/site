import Image from 'next/image'

import Date from '@/components/date'

import styles from './card.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Card({ date, title, link }) {
  return (
    <div className={styles.mainCard}>
      <a
        href={link}
        className={styles.noUnderline}
        target="_blank"
        rel="noreferrer"
      >
        <small className={utilStyles.lightText}>
          <Date dateString={date} />
        </small>
        <h2 className={styles.spaceOut}>{title}</h2>
        <div className={styles.avatarTitle}>
          <span>-</span>
          <Image
            width="30"
            height="30"
            src="/images/profile.jpeg"
            alt="Avatar"
          />
          <span>Carlos López</span>
        </div>
      </a>
    </div>
  )
}
