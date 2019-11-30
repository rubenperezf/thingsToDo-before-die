
import React from 'react'
import Link from '../components/Link'
import { connect } from 'react-redux'
import { SET_VISIBILITY_FILTER } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {

      dispatch({ type: SET_VISIBILITY_FILTER, payload: ownProps.filter })

    }
  }
}

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)

export default FilterLink