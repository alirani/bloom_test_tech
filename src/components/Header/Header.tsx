'use client'

import Link from 'next/link'
import BloomIcon from '../Icon/Bloom'
import styles from './Header.module.scss'
import { Burger, Button, Drawer, NavLink } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconBellFilled } from '@tabler/icons-react'

interface NavLink {
  link: string
  label: string
  button?: boolean
  icon?: boolean
}

interface HeaderProps {
  navItems: NavLink[]
}

const getNavItems = (navItems: NavLink[], close: () => void, centered?: boolean) => {
  return (
    <ul className={centered ? styles.centeredList : ''}>
      {navItems.map((navItem) => (
        <li key={navItem.label}>
          {navItem.button ? (
            <Button
              variant='filled'
              color='#12564B'
              radius='xl'
              component={Link}
              href={navItem.link}
              onClick={close}
            >
              {navItem.label}
            </Button>
          ) : (
            <Button
              variant='transparent'
              color='#101010'
              px={8}
              radius='xl'
              leftSection={navItem.icon ? <IconBellFilled color='#CDEBE7' /> : null}
              component={Link}
              href={navItem.link}
              onClick={close}
            >
              {navItem.label}
            </Button>
          )}
        </li>
      ))}
    </ul>
  )
}

const Header = (props: HeaderProps) => {
  const { navItems } = props

  const [opened, { open, close }] = useDisclosure()
  const centered = true
  
  return (
    <header className={styles.header}>
      <BloomIcon />
      <Burger
        className={styles.icon}
        color={'#1bceb5'}
        opened={opened}
        onClick={open}
        aria-label='Open navigation'
      />
      <nav className={styles.navBar}>
        {getNavItems(navItems, close)}
        <Drawer
          className={styles.mobNav}
          opened={opened}
          onClose={close}
          title={<BloomIcon />}
        >
          {getNavItems(navItems, close, centered)}
        </Drawer>
      </nav>
    </header>
  )
}

export default Header
