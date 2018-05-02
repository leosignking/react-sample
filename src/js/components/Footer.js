import React from 'react';

export default class Footer extends React.Component {

  render() {

    const containerStyle = {
      position: 'fixed',
      height: '100px',
      bottom: '0',
      width: '100%',
    }
    return (
      <footer style={ containerStyle }>
        <div class="row">
          <div class="col-lg-12">
            <p>Developed by <a href="http://leosignking.github.io/" target="_blank" rel="nofollow">Leo Sign King</a>. Contact him at <a href="mailto:mailtosridhar@gmail.com">mailtosridhar@gmail.com</a>.</p>
            <p>Theme by <a href="http://thomaspark.co" target="_blnak" rel="nofollow">Thomas Park</a>. Contact him at <a href="mailto:thomas@bootswatch.com">thomas@bootswatch.com</a>.</p>
            <p>Code released under the <a href="https://github.com/thomaspark/bootswatch/blob/gh-pages/LICENSE">MIT License</a>.</p>
            <p>Based on <a href="https://getbootstrap.com" rel="nofollow">Bootstrap</a>. Icons from <a href="https://fortawesome.github.io/Font-Awesome/" rel="nofollow">Font Awesome</a>. Web fonts from <a href="https://www.google.com/webfonts" rel="nofollow">Google</a>.</p>

          </div>
        </div>

      </footer>
    );
  }
}
