import { getDealFilter } from "../getDealFilter";
import mockData from "../../../public/db.json";

describe('For Get Deal Filter', function(){

    it('returns all 11 deals when no filter applied', function(){

        const state = {
            productFilters:[],
            providerFilter: undefined
        }
        const result = getDealFilter(state, mockData.deals);

        expect(result).toHaveLength(11);

    }),

    it('returns 4 broadband only deals if filter by broadband', function(){

        // arrange
        const state = {
            productFilters: ['broadband'],
            providerFilter: undefined
        }

        // actual
        const result = getDealFilter(state,mockData.deals);

        // assert
        expect(result).toHaveLength(4);
    })

    it('returns 4 deals if filter by broadband and tv', function(){

        // arrange
        const state = {
            productFilters: ['broadband', 'tv'],
            providerFilter: undefined
        }

        // actual
        const result = getDealFilter(state, mockData.deals);

        // assert
        expect(result).toHaveLength(4)

    })

    it('returns 4 deals if filter by tv and broadband - even product filter array position changed', function(){

        // arrange
        const state = {
            productFilters: ['tv', 'broadband'],
            providerFilter: undefined
        }

        // actual
        const result = getDealFilter(state, mockData.deals);

        // assert
        expect(result).toHaveLength(4)

    })

    it('returns 1 deal , if filter by broadband and mobile', function(){

        // arrange
        const state = {
            productFilters: ['broadband','mobile'],
            providerFilter: undefined
        }

        // actual
        const result = getDealFilter(state, mockData.deals);

        // assert
        expect(result).toHaveLength(1);

    })

    it('returns 1 deal, if filter by SKY ', function(){

        // arrange
        const state = {
            productFilters: [],
            providerFilter: 1 // sky provider id is 1
        }

        // actual
        const result = getDealFilter(state, mockData.deals);

        // assert
        expect(result).toHaveLength(1);

    })

    it('returns 2 deals,if filter by BT, broadband and TV', function(){

        // arrange
        const state = {
            productFilters: ['broadband', 'tv'],
            providerFilter: 3 // BT provider id
        }

        // actual
        const result = getDealFilter(state, mockData.deals);

        // assert
        expect(result).toHaveLength(2);

    })

})
