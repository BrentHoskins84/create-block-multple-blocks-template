const { join } = require( 'path' );

module.exports = {
    defaultValues: {},
    templatesPath: join( __dirname, 'templates' ),
    assetsPath: join( __dirname, 'inner-template' ),
};