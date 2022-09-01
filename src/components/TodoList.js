import React from 'react'

const styles = {
    ul:{
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

export default function TodoList() {
    return (
        <ul style={styles.ul}>
            <li>Sus</li>
            <li>Suus</li>
            <li>Siiis</li>
        </ul>
    )
}