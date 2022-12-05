import React from 'react'
import { Movie } from '../types/common'
import SearchBar from './SearchBar'
import styled from 'styled-components'
import MovieCard from './MovieCard'

export default function Movies(props: { data: Movie[], setData: any, filteredValue: string, setFilteredValue: any }) {

  const TvSeries: any = [];
  props.data.map((item) => {
    if (item.category !== "Movie") {
      TvSeries.push(item);
    }
  })

  let array: Movie[] = [];
  if (props.filteredValue === '') {
    array = TvSeries;
  } else {
    TvSeries.map((item: Movie) => {
      if (item.title.toLocaleLowerCase().includes(props.filteredValue)) {
        array.push(item);
      }
    })
  }

  return (
    <>
      <SearchBar setFilteredValue={props.setFilteredValue} filteredValue={props.filteredValue} placeholder='Search for TV series'></SearchBar>
      <H1>TV series</H1>
      <TvSeriesBox>
        {array.map((item: Movie) =>
          <MovieCard key={item.title}
            imgSrc={item.isTrending ? process.env.PUBLIC_URL + item.thumbnail.regular.small : process.env.PUBLIC_URL + item.thumbnail.regular.small}
            bookmarkValue={item.isBookmarked}
            releaseYear={item.year}
            type={item.category}
            rating={item.rating}
            title={item.title}
            data={props.data}
            setData={props.setData}
          />
        )}
      </TvSeriesBox>
    </>
  )
}



const H1 = styled.h1`
  font-family: Outfit;
  font-size: 20px;
  font-weight: 300;
  line-height: 25px;
  letter-spacing: -0.3125px;
  text-align: left;
  color:white;
  width: 92%;
  margin:24px 0;

`

const TvSeriesBox = styled.div`
  width: 92%;
  display: flex;
  flex-wrap: wrap;
  column-gap: 4%;
  row-gap: 16px;
  margin-bottom: 30px;
`