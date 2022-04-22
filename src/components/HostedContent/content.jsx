import React from "react";
import './content.css';
import Imgg from '../../assets/imgg.png';
import { Player } from '../Player/Player';
import Audio from '../../assets/audio/Milady.mp3';

function Content() {
    return (
      <>

  <div className="ir-hosted-content-full-width">
    <div className="hosted_content">
      <div className="variant_book_preview">
          <div className="library_actions"><span className="ir-add-to-library-action"></span></div>                    
          <div className="variant_book_preview_text largeishcolumn ir-book-preview-column">                               
              <div className="ir-book-preview-description">                            
                  <h1 className="book_title variant_book_title" id="ir-book-title">Astrophisics for People in a Hurry's Summary</h1>
                  <h1 className="book_sub_title variant_book_sub_title" id="ir-book-sub-title">Key Insights &amp; Analysis</h1>
                  <h2 className="book_author" id="ir-book-author">Kelly Brogan, MD With Kristin Loberg</h2>                        
                  <div className="ir-book-preview-meta-wrapper">
                    <div className="ir-book-meta-wrapper ir-book-meta-duration"><span className="ir-book-listen-icon"></span><span className="ir-book-preview-meta-txt">18 Min read</span></div>                          
                    <div className="ir-book-meta-wrapper"><span className="ir-book-ai-summary-icon"></span><span className="ir-book-preview-meta-txt">14 Min listen</span></div>                          
                    <div className="ir-book-meta-wrapper"><span className="ir-book-library-icon"></span><span className="ir-book-preview-meta-txt">Add to Library</span></div>                          
                    <div className="ir-book-meta-wrapper"><span className="ir-book-human-summary-icon"></span><span className="ir-book-preview-meta-txt">Buy Book</span></div>                          
                  </div>
                  <div className="ir-category-h4" id="ir-category-h4"><h5 className="ir-preview-category">Business & Economics</h5>  <h5 className="ir-preview-category">Reference</h5></div>
              </div>
          </div>

            <div className="variant_book_preview_image">
                <div className="book_cover new_book_cover">
                <img className="book_cover_image" id="ir-book-cover-img" src={Imgg} />
                </div>
            </div> 
        </div>
    </div>
  </div>

  <div className="hosted_content tabs-wrapper">
    <div className="ir-tab-content">
      <ul className="nav nav-tabs ir-new-book-table-contents">
        {/* <li><a className="ir-book-preview-tabs-human-summary" data-toggle="tab" href="#human_summaries">Summary <i className="ir-lock"></i></a></li> */}
        <li><a data-toggle="tab" href="#ai_insights">Summary <i className="ir-lock"></i></a></li>
        <li><a data-toggle="tab" href="#ai_insights">Insights</a></li>
        <li><a data-toggle="tab" href="#ai_quotes" >Quotes</a></li>
        <li><a data-toggle="tab" href="#ai_quotes" >Community</a></li>
      </ul>
      <div className="tab-content">
        <div id="human_summaries" className="tab-pane fade in active">
          <div className="hosted_chapters" id="ir_hosted_chapters">
            <div className="ir-preview-chapter-titles">
              <h2>Overview</h2>
              <p>
                  Whether you are doing large business transactions or counting apples, numbers are an inescapable part of everyday life. But numbers are not easily
                  digested by the human brain. In Chip Heath and Karla Starr offer helpful tips for translating numbers and making them accessible to everyone. They explore 
                  key principles, such as the emotional dimension of numbers, and explain how to make them impactful for any audience. Plenty of practical examples are provided
                   to help readers understand numbers and be able to share their meaning.Whether you are doing large business transactions or counting apples, numbers are an 
                   inescapable part of everyday life. But numbers are not easily digested by the human brain. In Chip Heath and Karla Starr offer helpful tips for translating 
                   numbers and making them accessible to everyone. They explore key principles, such as the emotional dimension of numbers, and explain how to make them impactful
                    for any audience. Plenty of practical examples are provided to help readers understand numbers and be able to share their meaning.Whether you are doing large 
                    business transactions or counting apples, numbers are an inescapable part of everyday life. But numbers are not easily digested by the human brain. In Chip 
                    Heath and Karla Starr offer helpful tips for translating numbers and making them accessible to everyone. They explore key principles, such as the emotional 
                    dimension of numbers, and explain how to make them impactful for any audience. Plenty of practical examples are provided to help readers understand numbers 
                    and be able to share their meaning.</p>
            </div>
          </div>
        </div>
      </div>
    </div>


        {/*............ Table of contents........... */}

  <div className="book_preview_contents">
    <h2 className="audiobookText">Audiobook</h2>
    <div>
      <Player />
    {/* <figure>
        <audio
            controls src={Audio} autoPlay>
        </audio>
    </figure> */}
    </div>
    {/* <div className="side-bar-container">
        <ol className="ir-sidenav-list-items" id="ir-sidenav-ordered-list">
          <li className="ir-sidenav-content sidenavcontent ir-book-preview-side-item"><span href="#2wmalead4y"><span className="ir-ai-item-text">Overview</span> <i className="iconPplay"><img src={IconPlay} alt="" /></i></span></li>
          <li className="ir-sidenav-content sidenavcontent ir-book-preview-side-item"><span href="#usf97q9xrp"><span className="ir-ai-item-text">Key Insight 1</span><i className="iconPplay"><img src={IconPlay} alt="" /></i></span></li>
          <li className="ir-sidenav-content sidenavcontent ir-book-preview-side-item"><span href="#7w99tixxbe"><span className="ir-ai-item-text">Key Insight 2</span><i className="iconPplay"><img src={IconPlay} alt="" /></i></span></li>
          <li className="ir-sidenav-content sidenavcontent ir-book-preview-side-item"><span href="#l4tc17kbmd"><span className="ir-ai-item-text">Key Insight 3</span><i className="iconPplay"><img src={IconPlay} alt="" /></i></span></li>
          <li className="ir-sidenav-content sidenavcontent ir-book-preview-side-item"><span href="#8f457sfkgi"><span className="ir-ai-item-text">What to see, When to see</span><i className="iconPplay"><img src={IconPlay} alt="" /></i></span></li>
          <li className="ir-sidenav-content sidenavcontent ir-book-preview-side-item"><span href="#bh3y25hsbk"><span className="ir-ai-item-text">How's the Gun do Talking?</span><i className="iconPplay"><img src={IconPlay} alt="" /></i></span></li>
        </ol>
    </div> */}
  </div>

  </div>


      </>
  )
}

export default Content;