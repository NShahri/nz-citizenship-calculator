const idState = {
    lastId: 0
}

export default function idGenerator() {
    return ++idState.lastId;
}