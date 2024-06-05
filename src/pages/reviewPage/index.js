import "./style.scss"
import BreadCrumb from "../theme/breadCrum";
import React, {memo} from "react";

const ReviewPage = () => {
    return(
        <>
            <BreadCrumb name="Bài viết đánh giá" />
            <div className="container">
                <div className="review-container">
                    <div className="review-content">
                        <h1 className="review-title">Đánh giá về sản phẩm</h1>
                        <div className="review-meta">
                            <span className="review-date">Ngày đăng: 01/01/2022</span>
                            <span className="review-author">Bởi: John Doe</span>
                        </div>
                        <div className="review-body">
                            <p>Đây là một bài viết đánh giá về sản phẩm. Nội dung của bài viết có thể được mô tả ở đây.
                                Đánh giá có thể bao gồm các điểm mạnh, điểm yếu, và nhận xét của người viết về sản
                                phẩm.</p>
                            <p>Cũng có thể chèn hình ảnh hoặc video để minh họa cho bài viết.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default memo(ReviewPage);