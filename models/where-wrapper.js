module.exports = (knexData, knexWhereClause = 'where', ...argumentsInClause) => {
    switch (knexWhereClause) {
        case 'where':
            return knexData.where(...argumentsInClause)
            break;
        case 'whereNot':
            return knexData.whereNot(...argumentsInClause)
            break;
        case 'whereIn':
            return knexData.whereIn(...argumentsInClause)
            break;
        case 'whereNotIn':
            return knexData.whereNotIn(...argumentsInClause)
            break;
        case 'whereNull':
            return knexData.whereNull(...argumentsInClause)
            break;
        case 'whereNotNull':
            return knexData.whereNotNull(...argumentsInClause)
            break;
        case 'whereExists':
            return knexData.whereExists(...argumentsInClause)
            break;
        case 'whereNotExists':
            return knexData.whereNotExists(...argumentsInClause)
            break;
        case 'whereBetween':
            return knexData.whereBetween(...argumentsInClause)
            break;
        case 'whereNotBetween':
            return knexData.whereNotBetween(...argumentsInClause)
            break;
        case 'whereRaw':
            return knexData.whereRaw(...argumentsInClause)
            break;
        default:
            throw 'Invalid knexWhereClause in where-wrapper arguments'
            break;
    }
}