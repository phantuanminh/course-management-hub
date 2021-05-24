import React, { useState, useEffect, useCallback } from 'react'
import { Grid } from '@material-ui/core'
import CourseCard from './CourseCard'
import cardInfo from "./course_info"

const CardContainer = () => {
  return (
    <div style={{height: "auto", maxWidth: "70vw", margin: "0 auto"}}>
      <Grid container spacing={3} justify="space-between">
        {cardInfo.map(card => <CourseCard courseName={card.courseName} toDo={card.toDo} />)}
      </Grid>
    </div>
  )
}

export default CardContainer
