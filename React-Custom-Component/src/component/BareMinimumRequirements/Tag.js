import { useState } from 'react';
import styled from 'styled-components';

// TODO: Styled-Component 라이브러리를 활용해 여러분만의 tag 를 자유롭게 꾸며 보세요!

export const TagsInput = styled.div`
  margin: 8rem auto;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: 480px;
  padding: 0 8px;
  border: 1px solid rgb(214, 216, 218);
  border-radius: 6px;

  > ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;

    > .tag {
      width: auto;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      padding: 0 8px;
      font-size: 14px;
      list-style: none;
      border-radius: 6px;
      margin: 0 8px 8px 0;
      background: #4000c7;
        > .tag-close-icon {
        display: block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        font-size: 14px;
        margin-left: 8px;
        color: #4000c7;
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
      }
    }
  }

  > input {    
    flex: 1;
    border: none;
    height: 46px;
    font-size: 14px;
    padding: 4px 0 0 0;
    :focus {
    outline: transparent;
  }
  }

  &:focus-within {
    border: 1px solid #4000c7;
  }

`;

export const Tag = () => {
  const initialTags = ['CodeStates', 'kimcoding'];

  const [tags, setTags] = useState(initialTags);  // ['CodeStates', 'kimcoding']
  const [inputs, setInputs] = useState(''); // 초기 빈문자열

  const removeTags = (indexToRemove) => { // 태그를 지움
    // TODO : 태그를 삭제하는 메소드를 완성하세요.
    // tags(배열형태)에서 remove
    setTags(
      tags.filter((el) => {  // ['CodeStates', 'kimcoding']
        return tags[indexToRemove] !== el
      })
    )
  };

  // 추가로 씀
  const onClick = () => {
    console.log('test click');
  }
  
  const addTags = (event) => {  // 태그를 추가
    // TODO : tags 배열에 새로운 태그를 추가하는 메소드를 완성하세요. 
    // 이 메소드는 태그 추가 외에도 아래 3 가지 기능을 수행할 수 있어야 합니다.
    // - 이미 입력되어 있는 태그인지 검사하여 이미 있는 태그라면 추가하지 말기
    // - 아무것도 입력하지 않은 채 Enter 키 입력시 메소드 실행하지 말기
    // - 태그가 추가되면 input 창 비우기

    // let newTags = event.target.value; // 새로운 태그에 inputs을 넣음

    if(event.key === 'Enter' && event.target.value !== ''){  // 엔터가 눌렸는지 아닌지 검사
      //이미 입력되어 있는 태그인지 검사하여 이미 있는 태그라면 추가하지 말기
      if(!tags.includes(event.target.value)){ 
        setTags([...tags, event.target.value]);
        event.target.value = ''
      }
    }
  }
  
  return (
    <>
      <TagsInput>
        <ul id='tags'>
          {tags.map((tag, index) => (
            <li key={index} className='tag'>
              <span className='tag-title'>{tag}</span>
              <span className='tag-close-icon' onClick={() => removeTags(index)}> x
                {/* TODO :  tag-close-icon이 tag-title 오른쪽에 x 로 표시되도록 하고, 삭제 아이콘을 click 했을 때 removeTags 메소드가 실행되어야 합니다. */}
              </span>
            </li>
          ))}
        </ul>
        <input
          className='tag-input'
          type='text'
          onKeyUp={(event)=> {
            {/* 키보드의 Enter 키에 의해 addTags 메소드가 실행되어야 합니다. */}
            return event.key === 'Enter'? addTags(event) : addTags('');
          }}
          placeholder='Press enter to add tags'
        />
      </TagsInput>
    </>
  );
};