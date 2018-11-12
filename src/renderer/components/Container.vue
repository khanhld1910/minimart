<template>
  <div>
    Container
  </div>
</template>

<script>
  export default {
    name: 'container',
    methods: {

    },
    data() {
      return {
        test: [],
      }
    },
    mounted() {
      const db = this.$db
      db.serialize(() => {
        this.$data.test = []

        db.run('create table if not exists lorem (info text)')

        const stmt = db.prepare('INSERT INTO lorem VALUES (?)')
        for (let i = 0; i < 11; ++i) {
          stmt.run(`Dolphin Dreams ${i}`)
        }
        stmt.finalize()
        db.each(
          'select rowid as id, info from lorem',
          (err, row) => {
            const line = `${row.id} + ": " + ${row.info} \n`
            this.$data.test.push(line)
          },
        )
      })
      db.close()
    },
  }
  
</script>

<style lang="scss">
</style>
