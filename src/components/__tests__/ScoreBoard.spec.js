import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ScoreBoard from '../ScoreBoard.vue'

describe('ScoreBoard', () => {
it('renders properly', () => {
  const wrapper = mount(ScoreBoard)
  expect(wrapper.exists()).toBe(true)
})

it('increases score when + button is clicked', async () => {
  const wrapper = mount(ScoreBoard)
  const scoreCards = wrapper.findAll('.score-card')

  expect(scoreCards.length).toBe(2) // Sanity check to confirm we've correctly selected the 2 score cards

  const team1ScoreCard = scoreCards[0]
  const addButton = team1ScoreCard.find('.button-add')
  const score = team1ScoreCard.find('.score')

  await addButton.trigger('click')
  await addButton.trigger('click')
  await addButton.trigger('click')

  expect(score.text()).toBe('3')
})

it('decreases score when - button is clicked', async () => {
  const wrapper = mount(ScoreBoard)
  const scoreCards = wrapper.findAll('.score-card')

  expect(scoreCards.length).toBe(2) // Confirm we've correctly selected the 2 score cards

  const team1ScoreCard = scoreCards[0]
  const addButton = team1ScoreCard.find('.button-add')
  const minusButton = team1ScoreCard.find('.button-minus')
  const score = team1ScoreCard.find('.score')

  // Add three points then take away 1
  await addButton.trigger('click')
  await addButton.trigger('click')
  await addButton.trigger('click')
  await minusButton.trigger('click')

  expect(score.text()).toBe('2')
})

it('does not allow score below 0', async () => {
  const wrapper = mount(ScoreBoard)
  const scoreCards = wrapper.findAll('.score-card')

  expect(scoreCards.length).toBe(2) // Confirm we've correctly selected the 2 score cards

  const team1ScoreCard = scoreCards[0]
  const minusButton = team1ScoreCard.find('.button-minus')
  const score = team1ScoreCard.find('.score')

  await minusButton.trigger('click')
  await minusButton.trigger('click')
  await minusButton.trigger('click')

  expect(score.text()).toBe('0')
})
})