export default function Success() {
    return <div>
        <form name="contact" action="/success" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
      
      </form>
    </div>
  }