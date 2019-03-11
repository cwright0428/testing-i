const enhancer = require('./enhancer.js');
// test away!
describe('enhancer.js', () => {
    describe('repair()', () => {
        it('should return new item with 100 durability', () => {
            expect(enhancer.repair({
                name:'',
                enhancement:15,
                durability: 90,
            })).toEqual({
                name:'',
                enhancement:15,
                durability: 100,
            });

        })
    })


    describe('succeed()',() => {
        it('should return new item with same enhancement value', () => {
            expect({
                name:'',
                enhancement:20,
                durability: 100,
            }).toEqual({
                name:'',
                enhancement:20,
                durability: 100,
            });

        } )

        it('should return new item with enhancement value + 1', () => {
            expect(enhancer.succeed({
                name:'',
                enhancement:15,
                durability: 100,
            })).toEqual({
                name:'',
                enhancement:16,
                durability: 100,
            });

        } )
    })


})



