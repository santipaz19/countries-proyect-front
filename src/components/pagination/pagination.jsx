import style from './pagination.module.css'

export function Pagination({ currentPage, setCurrentPage, max }) {
    const next = () => {
        setCurrentPage(currentPage + 1);
    };
    const previous = () => {
        setCurrentPage(currentPage - 1);
    };



    return (
        <div className={style.container}>
            <button disabled={currentPage === 1} onClick={previous} className={style.btn}>
                {"<"}
            </button>
            <span>{currentPage} of {max}</span>
            <button disabled={currentPage === max} onClick={next} className={style.btn}>
                {">"}
            </button>
        </div>
    );
}