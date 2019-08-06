import { getIconId } from "../getIcon";

describe('Get Icon for given name', function(){

    describe('With only id', function(){

        it('for TV', function(){

            // actual
            const result = getIconId('TV', true);

            expect(result).toEqual('tv');

        })

        it('for Fibre Broadband', function(){

            // actual
            const result = getIconId('Fibre Broadband', true);

            expect(result).toEqual('broadband');

        })

        it('for Broadband', function(){

            // actual
            const result = getIconId('Broadband', true);

            expect(result).toEqual('broadband');

        })

        it('for undefined Or if not found', function(){

            // actual
            const result = getIconId('', true);

            expect(result).toEqual('NA');

        })

        it('for Mobile', function(){

            // actual
            const result = getIconId('Mobile', true);

            expect(result).toEqual('mobile');

        })

    })

    describe('With HTML and id', function(){

        const ICON_HTML = '#icon-'

        it('for TV', function(){

            // actual
            const result = getIconId('TV');

            expect(result).toEqual(`${ICON_HTML}tv`);

        })

        it('for undefined Or if not found', function(){

            // actual
            const result = getIconId();

            expect(result).toEqual(`${ICON_HTML}NA`);

        })

        it('for Fibre Broadband', function(){

            // actual
            const result = getIconId('Fibre Broadband');

            expect(result).toEqual(`${ICON_HTML}wifi`);

        })

        it('for Broadband', function(){

            // actual
            const result = getIconId('Broadband');

            expect(result).toEqual(`${ICON_HTML}wifi`);

        })


        it('for Mobile', function(){

            // actual
            const result = getIconId('Mobile');

            expect(result).toEqual(`${ICON_HTML}mobile`);

        })

    })

})