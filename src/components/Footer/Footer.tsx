import { Divider, Group, List, ListItem, Text } from '@mantine/core'
import BloomIcon from '../Icon/Bloom'
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktokFilled,
  IconBrandTwitterFilled,
  IconBrandYoutubeFilled
} from '@tabler/icons-react'
import styles from './Footer.module.scss'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerHeader}>
          <BloomIcon />
          <Text size='md'>
            Bloom Alternance est la première plateforme de recrutement d&apos;alternants et de stagiaire en France. Avec
            +50 000 candidatures et 170 entreprises partenaires.
          </Text>
        </div>
        <div className={styles.footerLists}>
          <div>
            <Text size='xl'>Etudiant</Text>
            <List listStyleType='none'>
              <ListItem>Guide d&apos;alternance</ListItem>
              <ListItem>Je postule</ListItem>
              <ListItem>Les offres</ListItem>
              <ListItem>FAQ</ListItem>
              <ListItem>Blog</ListItem>
            </List>
          </div>
          <div>
            <Text size='xl'>A propos</Text>
            <List listStyleType='none'>
              <ListItem>Termes & Conditions</ListItem>
              <ListItem>CGV</ListItem>
              <ListItem>Mention Légales</ListItem>
              <ListItem>About us</ListItem>
            </List>
          </div>
        </div>
      </div>
      <Divider my='md' />
      <div className={styles.footerCopyright}>
        <Text size='sm'>2022 © Bloom Alternance. All rights reserved</Text>
        <Group>
          <IconBrandFacebookFilled />
          <IconBrandInstagram />
          <IconBrandLinkedin />
          <IconBrandTwitterFilled />
          <IconBrandYoutubeFilled />
          <IconBrandTiktokFilled />
        </Group>
      </div>
    </footer>
  )
}

export default Footer
