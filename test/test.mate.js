suite('Mate', function() {

    setup(function() {
     
    });

    suite('add', function() {

        test('2 + 2 is 4', function() {
            assert.equal(Mate.add(2,2), 4);
        });

        test('-2 + (-2) is -4', function() {
            assert.equal(Mate.add(-2,-2), -4);
        });

         test('-2 + 2 is 0', function() {
            assert.equal(Mate.add(-2,2), 0);
        });

         test('0 + 2 is 2', function() {
            assert.equal(Mate.add(0,2), 2);
        });

    });

    suite('sub', function() {
        
        test('2 - 2 is 0', function() {
            assert.equal(Mate.sub(2,2), 0);
        });

        test('-2 - (-2) is 0', function() {
            assert.equal(Mate.sub(-2,-2), 0);
        });

         test('-2 - 2 is -4', function() {
            assert.equal(Mate.sub(-2, 2), -4);
        });

         test('0 - 2 is -2', function() {
            assert.equal(Mate.sub(0,-2), 2);
        });

    });

    suite('mul', function() {

        test('2 * 2 is 4', function() {
            assert.equal(Mate.mul(2,2), 4);
        });

        test('-2 * 2 is -4', function() {
            assert.equal(Mate.mul(-2,2), -4);
        });

         test('-2 * -2 is 4', function() {
            assert.equal(Mate.mul(-2,-2), 4);
        });

         test('0 * 2 is 0', function() {
            assert.equal(Mate.mul(0,2), 0);
        });

    });

    suite('div', function() {

        test('2 / 2 is 1', function() {
            assert.equal(Mate.div(2,2), 1);
        });

        test('-4 / 2 is 2', function() {
            assert.equal(Mate.div(-4,2), -2);
        });

         test('0 / 2 is 0', function() {
            assert.equal(Mate.div(0,2), 0);
        });

          test('2 / 0 =  \'error\'', function() {
            assert.equal(Mate.div(2,0), 'error');
        });

    });


});