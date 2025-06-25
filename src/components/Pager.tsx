export const Pager = ({activePage, handlePageChange, pagesNumber}: {activePage: number, handlePageChange: (page: number) => void, pagesNumber: number}) => {
    return (
        <div className="pager">
            <button disabled={activePage <= 1} onClick={() => handlePageChange(activePage - 1)}>Previous</button>
            <>
                {Array.from({ length: pagesNumber }, (_, i) => i + 1).map((pageNumber) =>
                    <button key={pageNumber} disabled={pageNumber === activePage} className={pageNumber === activePage ? 'active' : ''} onClick={() => handlePageChange(pageNumber)}>{pageNumber}</button>
                )}
            </>
            <button disabled={activePage >= pagesNumber} onClick={() => handlePageChange(activePage + 1)}>Next</button>
        </div>

    )
}