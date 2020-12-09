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
        return db('schemes').where({ id })
        .then(res => {
            if(!res[0]) {
                return Promise.resolve(null)
            } else {
                return res[0]
            }
        })
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
        // insert into steps(step_number, instructions, scheme_id)
        // values (1, 'Drive', 6)
        return db('steps')
        .insert({step_number:step.step_number, 
            instructions:step.instructions, 
            scheme_id:scheme_id})
        .then((res) => {
            return db('steps as st')
            .join('schemes as s', 'st.scheme_id', 's.id')
            .select('st.step_number', 's.scheme_name', 'st.instructions')
            .where('s.id', scheme_id)
            .orderBy('st.step_number');
        })
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