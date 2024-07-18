'use client'

import Link from 'next/link'
import BloomIcon from '../Icon/Bloom'
import styles from './Header.module.scss'
import { Burger, Button, NavLink } from '@mantine/core'
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

const Header = (props: HeaderProps) => {
  const { navItems } = props

  const [opened, { toggle }] = useDisclosure()

  return (
    <header className={styles.header}>
      <BloomIcon className={styles.logo} />
      <Burger
        className={styles.icon}
        opened={opened}
        onClick={toggle}
        aria-label='Toggle navigation'
      />
      <nav className={styles.navBar}>
        <ul>
          {navItems.map((navItem) => (
            <li key={navItem.label}>
              {navItem.button ? (
                <Button
                  variant='filled'
                  color='#12564B'
                  radius='xl'
                  component={Link}
                  href={navItem.link}
                >
                  {navItem.label}
                </Button>
              ) : (
                <Button
                  variant='transparent'
                  color='#101010'
                  px={8}
                  radius='xl'
                  leftSection={
                    navItem.icon ? (
                      <IconBellFilled
                        color='#CDEBE7'
                      />
                    ) : null
                  }
                  component={Link}
                  href={navItem.link}
                >
                  {navItem.label}
                </Button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
