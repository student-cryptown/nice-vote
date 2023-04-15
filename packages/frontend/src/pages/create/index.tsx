import { Button, Input, Label, Textarea, TypographyH2 } from '@/components'
import { formatDate } from '@/utils'
import { Plus } from 'lucide-react'
import { useState } from 'react'

export default function CreateVote() {

  const [input, setInput] = useState<
    {
      title: string
      description: string
      votingEnds: Date | null
      options: string[]
    }
  >({
    title: '',
    description: '',
    votingEnds: null,
    options: []
  })

  return (<>
    <TypographyH2 className='text-center'>Create Vote</TypographyH2>
    <div className="grid w-full items-center gap-1.5 my-5">
      <Label htmlFor="email-2">Title</Label>
      <Input type="email" placeholder="Title"
        value={input.title}
        onChange={(e) => {
          setInput({
            ...input,
            title: e.target.value
          })
        }} />
    </div>
    <div className="grid w-full items-center gap-1.5 my-5">
      <Label htmlFor="email-2">Description</Label>
      <Textarea rows={5} placeholder="Description"
        value={input.description}
        onChange={(e) => {
          setInput({
            ...input,
            description: e.target.value
          })
        }} />
    </div>
    <div className="grid w-full items-center gap-1.5 my-5">
      <Label htmlFor="email-2">Voting Ends</Label>
      <Input type="datetime-local" placeholder="Voting Ends"
        value={input.votingEnds ? formatDate(input.votingEnds) : ''}
        onChange={(e) => {
          setInput({
            ...input,
            votingEnds: new Date(e.target.value)
          })
        }} />
      <p className="text-sm text-slate-500">Voting will end at the specified time</p>
    </div>
    <div className="grid w-full items-center gap-1.5 my-5">
      <Label htmlFor="email-2">Options</Label>
      {input.options.map((option, index) => {
        return (<Input
          type="text"
          key={"option" + index}
          placeholder="option"
          value={option}
          onChange={(e) => {
            setInput({
              ...input,
              options: input.options.map((v, _i) => _i == index ? e.target.value : v)
            })
          }} />)
      })}

      <div className='w-full flex justify-end mt-3'>
        <button className='py-1 px-4 rounded-full border border-gray-700 flex items-center hover:bg-gray-200'
          onClick={() => {
            setInput({ ...input, options: [...input.options, ""] })
          }}
        >
          <Plus size={20} />
          add options
        </button>
      </div>
      <p className="text-sm text-slate-500">Set the options available for voting</p>
    </div>
    <Button className='w-full mt-2' size="lg">Publish Vote!</Button>
  </>)
}