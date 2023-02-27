import React, { useState } from 'react';

const Search = () => {

    const [searchInput, setSearchInput] = useState(null)

    const handleSearch = () => {
        
    }


    return (
        <div className="header-search-modal">
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Search Products</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="w-100 d-flex header-search-modal-form">
                                <input class="form-control me-2 form-control-lg" type="text" placeholder="Type product or brand name" onChange={(e) => setSearchInput(e.target.value)} />
                                <input class="btn btn-primary px-5 btn-lg" type="submit" value="SEARCH" onClick={() => handleSearch()} />
                            </div>
                            <div className="header-search-modal-result my-3">
                                <div className="header-search-modal-result-view text-center my-3 mt-4">
                                    <button className="btn btn-success px-4 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right mb-1 me-3" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg>
                                        <span>View All Items</span>
                                    </button>
                                </div>
                            </div>
                            {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;