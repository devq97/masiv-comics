import { defineMessages } from "react-intl";

export const scope = 'masiv.containers.pages.Comic';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Masiv Comics'
  },
  click: {
    id: `${scope}.click`,
    defaultMessage: 'Click on Comic!'
  },
  change: {
    id: `${scope}.change`,
    defaultMessage: 'Change'
  },
  month: {
    id: `${scope}.month`,
    defaultMessage: 'Month'
  },
  year: {
    id: `${scope}.year`,
    defaultMessage: 'Year'
  },
  day: {
    id: `${scope}.day`,
    defaultMessage: 'Day'
  },
  error: {
    id: `${scope}.error`,
    defaultMessage: 'Error fetching API'
  }
})
