import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import MatchupTitle from '../MatchupTitle.vue'

describe('MatchupTitle', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(MatchupTitle, {
      props: {
        team1: { name: 'Team 1', score: 0 },
        team2: { name: 'Team 2', score: 0 }
      }
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('should display a header with the two team names', () => {
    const wrapper = shallowMount(MatchupTitle, {
      props: {
        team1: { name: 'Team 1', score: 0 },
        team2: { name: 'Team 2', score: 0 }
      }
    })
    expect(wrapper.text()).toBe('Team 1 vs. Team 2')
  })

  it('should highlight team 1 if they are winning', () => {
    const wrapper = shallowMount(MatchupTitle, {
      props: {
        team1: { name: 'Team 1', score: 5 },
        team2: { name: 'Team 2', score: 0 }
      }
    })
    const team1Header = wrapper.find('.team-1')
    const team2Header = wrapper.find('.team-2')
  
    expect(team1Header.classes()).toContain('winning')
    expect(team2Header.classes()).not.toContain('winning')
  })

  it('should not highlight any team if the score is tied', () => {
    const wrapper = shallowMount(MatchupTitle, {
      props: {
        team1: { name: 'Team 1', score: 5 },
        team2: { name: 'Team 2', score: 5 }
      }
    })
    const team1Header = wrapper.find('.team-1')
    const team2Header = wrapper.find('.team-2')
  
    expect(team1Header.classes()).not.toContain('winning')
    expect(team2Header.classes()).not.toContain('winning')
  })
})