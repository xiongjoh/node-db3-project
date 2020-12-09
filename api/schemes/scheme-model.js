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
        return
    },
    addStep(step, scheme_id){
        return
    },
    update(changes, id){
        return
    },
    remove(id){
        return
    },
}