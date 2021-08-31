/*
 * @Author: busyzz
 * @Date: 2021-08-31 16:31:04
 * @Description:
 */
import React, { forwardRef } from 'react';
import ReactQuill from 'react-quill';
import * as Quill from 'quill';
import 'react-quill/dist/quill.snow.css';
import styles from './index.module.scss';
interface UnprivilegedEditor {
  getLength(): number;
  getText(index?: number, length?: number): string;
  getHTML(): string;
  getBounds(index: number, length?: number): Quill.BoundsStatic;
  getSelection(focus?: boolean): Quill.RangeStatic;
  getContents(index?: number, length?: number): Quill.DeltaStatic;
}
interface Mixin {
  createEditor(
    element: HTMLElement,
    config: Quill.QuillOptionsStatic
  ): Quill.Quill;
  hookEditor(editor: Quill.Quill): void;
  unhookEditor(editor: Quill.Quill): void;
  setEditorReadOnly(editor: Quill.Quill, value: boolean): void;
  setEditorContents(editor: Quill.Quill, value: Quill.Delta | string): void;
  setEditorSelection(editor: Quill.Quill, range: Quill.RangeStatic): void;
  makeUnprivilegedEditor(editor: Quill.Quill): UnprivilegedEditor;
}
export interface ReactQuillInstance extends ReactQuill, Mixin {}

interface IEditorProps {
  value?: string;
  onChange?: (value?: string) => void;
}
const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
  ],
};
const Editor = forwardRef<ReactQuillInstance, IEditorProps>(
  ({ value, onChange }, ref) => {
    return (
      <ReactQuill
        className={styles.editor}
        ref={ref}
        theme='snow'
        defaultValue={value}
        onChange={onChange}
        modules={modules}
      />
    );
  }
);

export default Editor;
