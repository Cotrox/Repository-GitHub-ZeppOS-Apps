module.exports = a => new Promise((r, j) => a((e, d) => e ? j(e) : r(d)))
