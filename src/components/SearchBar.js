import React from 'react'
import Form from 'react-bootstrap/Form';

export default function SearchBar({ setSearchId }) {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let searchRequest = data.get('searchBar')
    setSearchId(searchRequest)
  }

  return (
    <>
    <Form onSubmit={handleSubmit} >
    <Form.Group className="search-bar" controlId="search-news">
    <Form.Control type="search" name="searchBar" placeholder="Search News" />
    <Form.Text className="text-muted">
    </Form.Text>
    </Form.Group>
    </Form>
    </>

  )



}
