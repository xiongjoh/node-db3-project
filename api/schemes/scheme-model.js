// scheme-model

const db = require('../../data/db-config')

module.exports = {
    find(){
        return db('schemes')
    },
    findById(id){
        // select
        //     *
        // from "schemes" s
        // where s.id = 1
        return db('schemes').where({ id }).first();
    },
    findSteps(id){
        // select
        //     s.scheme_name,
        //     st.step_number,
        //     st.instructions
        // from steps st
        // join schemes s
        //     on st.scheme_id = s.id
        // where s.id = 2
        // order by st.step_number
        return db('steps as st')
        .join('schemes as s', 'st.scheme_id', 's.id')
        .select('st.step_number', 's.scheme_name', 'st.instructions')
        .where('s.id', id)
        .orderBy('st.step_number');
    },
    add(scheme){
        // insert into schemes (scheme_name) 
        // values ("Order A Burger")
        return db('schemes')
        .insert(scheme)
        .then(([id]) => {
            console.log(id)
            return db('schemes').where({ id }).first();
        })
    },
    addStep(step, scheme_id){
        return
    },
    update(changes, id){
        // update schemes
        // set scheme_name = "tweete"
        // where schemes.id = 11
        return db('schemes')
        .where({ id })
        .update(changes)
        .then((res) => {
            return db('schemes').where('id', id).first()
        })
    },
    remove(id){
        // delete from schemes
        // where schemes.id = 12
        return db('schemes').where({id}).del()
    },
}