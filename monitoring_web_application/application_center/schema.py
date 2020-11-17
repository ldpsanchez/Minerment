from ariadne import QueryType, make_executable_schema

type_defs = """
    type Query {
        hello: String!
    }
"""
query = QueryType()

@query.field("hello")
def resolve_hello(*_):
    return "amo mi vida!"

schema = make_executable_schema(type_defs, query)