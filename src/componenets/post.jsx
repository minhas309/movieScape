import { Box } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import React, { useRef } from "react";


const post = () => {

  const editorRef = useRef(null);
  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //   }
  // };

    return (
        <>
        <Box maxWidth={true} sx={{
          backgroundSize: "contain",
          
        }}>
          <Editor
            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
            onInit={(evt, editor) => editorRef.current = editor}
            initialValue="<p>What's on your mind.</p>"
            init={{
              width:650,
              max_height: 200,
              mobile: {
                menubar: true
              },
              menubar: false,
              statusbar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount', 
                'media', 'tinymcespellchecker', 'autocorrect'
              ],
              spellchecker_language: 'en',
              toolbar: ' blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist | ' +
                'removeformat | image | emoji',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',

              file_picker_types: 'image',
              /* and here's our custom image picker*/
              file_picker_callback: (cb, value, meta) => {
                const input = document.createElement('input');
                input.setAttribute('type', 'file');
                input.setAttribute('accept', 'image/*');
            
                input.addEventListener('change', (e) => {
                  const file = e.target.files[0];
            
                  const reader = new FileReader();
                  reader.addEventListener('load', () => {
                    /*
                      Note: Now we need to register the blob in TinyMCEs image blob
                      registry. In the next release this part hopefully won't be
                      necessary, as we are looking to handle it internally.
                    */
                    const id = 'blobid' + (new Date()).getTime();
                    const blobCache =  editorRef.activeEditor.editorUpload.blobCache;
                    const base64 = reader.result.split(',')[1];
                    const blobInfo = blobCache.create(id, file, base64);
                    blobCache.add(blobInfo);
            
                    /* call the callback and populate the Title field with the file name */
                    cb(blobInfo.blobUri(), { title: file.name });
                  });
                  reader.readAsDataURL(file);
                });
            
                input.click();
              },
            }}
          />
        </Box>
      </>
    );
}

export default post;