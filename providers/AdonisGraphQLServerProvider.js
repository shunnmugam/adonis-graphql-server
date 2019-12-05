const { ServiceProvider } = require('@adonisjs/fold');

class AdonisGraphQLServerProvider extends ServiceProvider {
    register() {
        this.app.singleton('GraphQLServer', () => {
            const Config = this.app.use('Adonis/Src/Config');
            const { runHttpQuery } = this.app.use('apollo-server-core');
            const GraphiQL = this.app.use('graphql-playground-html');
            const { makeExecutableSchema } = require('graphql-tools');
            const { print } = require('graphql/language/printer');

            return new (require('../src/AdonisGraphQLServer'))({ Config, runHttpQuery, GraphiQL, makeExecutableSchema, print });
        });
    }
}

module.exports = AdonisGraphQLServerProvider;
