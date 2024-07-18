'use client'

import NextImage from 'next/image'
import { Button, Image, Text, TextInput, Title } from '@mantine/core'
import { IconMapPin, IconSearch } from '@tabler/icons-react'
import React, { useState } from 'react'
import useIsDesktop from '@/hooks/useIsDesktop'
import { useRouter } from 'next/navigation'
import styles from './SearchForm.module.scss'
import { cleanEmptyParameters } from '@/utils/cleanParameters'

const SearchForm = () => {
  const router = useRouter()

  const [location, setLocation] = useState('')
  const [title, setTitle] = useState('')

  const isDesktop = useIsDesktop()
  
  const getJobs = (event: React.FormEvent) => {
    event.preventDefault()

    const params = new URLSearchParams(cleanEmptyParameters({
      title: title,
      location: location
    })).toString()

    return router.push(`/search?${params}`)
  }

  return (
    <>
      <div className={styles.searchForm}>
        <Title>
          Trouve ton <span className={styles.highlightText}>nouveau job</span>
        </Title>
        <div className={styles.imgWrapper}>
          {isDesktop ? (
            <Image
              className={styles.imgDesk}
              component={NextImage}
              src={'/bannerDesk.png'}
              alt='My image'
              width={0}
              height={0}
              sizes='100vw'
              priority
            />
          ) : (
            <Image
              className={styles.imgMob}
              component={NextImage}
              src={'/bannerMob.jpg'}
              alt='My image'
              width={0}
              height={0}
              sizes='100vw'
              priority
            />
          )}
        </div>
        <Text size='sm'>Des milliers d&apos;emplois vous attendent.</Text>
        <form
          className={styles.formInputs}
          onSubmit={getJobs}
        >
          <TextInput
            className={styles.inputText}
            placeholder='Quel métier recherchez vous ?'
            leftSection={<IconSearch />}
            radius={isDesktop ? '2rem 0 0 2rem' : 'xl'}
            name='title'
            onChange={(event) => setTitle(event.currentTarget.value)}
          />
          <TextInput
            className={styles.inputLocation}
            placeholder='Localisation'
            leftSection={<IconMapPin />}
            radius={isDesktop ? '0' : 'xl'}
            name='location'
            onChange={(event) => setLocation(event.currentTarget.value)}
          />
          <Button
            className={styles.submitButton}
            type='submit'
          >
            Rechercher
          </Button>
        </form>
        <Text
          c='#2EC1AC'
          fw={700}
          td='underline'
        >
          Recevoir une alerte par email
        </Text>
      </div>
    </>
  )
}

export default SearchForm
