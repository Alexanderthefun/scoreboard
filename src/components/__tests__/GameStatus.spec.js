import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import GameStatus from '../GameStatus.vue'

describe('GameStatus', () => {
    it('should display how much a team is winning by', () => {
        const wrapper = shallowMount(GameStatus, {
            props: {
                team1: { name: 'Team 1', score: 2 },
                team2: { name: 'Team 2', score: 0 },
            }
        })
        expect(wrapper.exists()).toBe(true)
    })
    
    it('shows when the game is tied', () => {
        const wrapper = shallowMount(GameStatus, {
            props: {
                team1: { name: 'Team 1', score: 2},
                team2: { name: 'Team 2', score: 2}
            }
        })

        expect(wrapper.text()).toBe('The game is currently tied')
    })

    it('shows when a team is leading by a single point', () => {
        const wrapper = shallowMount(GameStatus, {
            props: {
                team1: { name: 'Team 1', score: 2},
                team2: { name: 'Team 2', score: 1}
            }
        })

        expect(wrapper.text()).toBe('Team 1 is leading by 1 point')
    })

    it('should display how much a team is winning by', () => {
        const wrapper = shallowMount(GameStatus, {
            props: {
                team1: { name: 'Team 1', score: 2 },
                team2: { name: 'Team 2', score: 0 },
            }
        })
        
        expect(wrapper.text()).toBe('Team 1 is leading by 2 points')
    })
})