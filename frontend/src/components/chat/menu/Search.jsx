import { Search as SearchIcon } from '@mui/icons-material';
import {InputBase} from '@mui/material';
import { Box, styled } from '@mui/system';


const Component = styled(Box)`
    background-color: #fff;
    height: 45px;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    align-items: center;
`

const Wrapper = styled(Box)`
    background-color: #f0f2f5;
    position: relative;
    margin: 0 13px;
    width: 100%;
    border-radius: 15px;
`

const Icon = styled(SearchIcon)`
    position: absolute;
    height: 100%;
    padding: 6px;
    color: #919191;

`

const InputField = styled(InputBase)`
    width: 100%;
    padding: 16px;
    padding-left: 65px;
    height: 15px;

`

const Search = ({setText}) => {
    return (
        <Component>
            <Wrapper>
                <Icon>
                    <SearchIcon
                        fontSize='small'
                    />
                </Icon>
                <InputField
                    placeholder='Search or Start new chat'
                    onChange={()=>setText(e.target.value)}
                />
            </Wrapper>
        </Component>
    )
}

export default Search;